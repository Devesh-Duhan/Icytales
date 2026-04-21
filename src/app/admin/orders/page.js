"use client"
import { useEffect, useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminTable from "@/components/admin/AdminTable";
import { getAdminOrders, updateOrderStatus, deleteOrder } from "@/lib/api";

export default function AdminOrdersPage() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    { key: "orderId", label: "Order #" },
    { key: "customer", label: "Customer" },
    { key: "amount", label: "Amount" },
    { key: "paymentStatus", label: "Payment" },
    { key: "orderStatus", label: "Status" },
    {
      key: "actions",
      label: "Actions",
      render: (row) => (
        <div className="flex gap-2">
          <select
            value={row.rawStatus}
            onChange={(e) => handleStatusChange(row._id, e.target.value)}
            className="rounded-lg border border-slate-200 px-2 py-1 text-xs outline-none focus:border-[#F83D8E]"
          >
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <button
            onClick={() => handleDelete(row._id)}
            className="text-red-500 hover:text-red-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  const loadOrders = async () => {
    setLoading(true);
    try {
      const data = await getAdminOrders();
      setRows(
        data.map((order) => ({
          _id: order._id,
          orderId: order._id.slice(-6).toUpperCase(),
          customer: order.user?.name || "Guest",
          amount: `$${order.totalPrice.toFixed(2)}`,
          rawStatus: order.orderStatus,
          paymentStatus: (
            <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${order.paymentStatus === 'paid' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
              {order.paymentStatus}
            </span>
          ),
          orderStatus: (
            <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${getStatusColor(order.orderStatus)}`}>
              {order.orderStatus}
            </span>
          ),
        }))
      );
    } catch (error) {
      console.error("Failed to load orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await updateOrderStatus(id, status);
      loadOrders();
    } catch (error) {
      alert("Failed to update status: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      try {
        await deleteOrder(id);
        loadOrders();
      } catch (error) {
        alert("Failed to delete order: " + error.message);
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered": return "bg-green-100 text-green-700";
      case "shipped": return "bg-blue-100 text-blue-700";
      case "processing": return "bg-indigo-100 text-indigo-700";
      case "cancelled": return "bg-red-100 text-red-700";
      default: return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="space-y-8">
      <AdminHeader
        title="Orders"
        subtitle="Review recent orders and track payment status."
      />
      {loading ? (
        <div className="rounded-[32px] border border-slate-200 bg-white p-12 text-center text-slate-600 shadow-sm">
          <div className="mx-auto w-10 h-10 border-4 border-[#F83D8E] border-t-transparent animate-spin rounded-full mb-4" />
          Loading orders...
        </div>
      ) : (
        <AdminTable columns={columns} rows={rows} />
      )}
    </div>
  );
}
