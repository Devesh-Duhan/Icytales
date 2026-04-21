"use client";

import AdminHeader from "@/components/admin/AdminHeader";
import AdminTable from "@/components/admin/AdminTable";

const columns = [
  { key: "orderId", label: "Order" },
  { key: "customer", label: "Customer" },
  { key: "amount", label: "Amount" },
  { key: "paymentStatus", label: "Payment" },
  { key: "orderStatus", label: "Order Status" },
];

const rows = [
  {
    orderId: "#2048",
    customer: "Aisha K.",
    amount: "$234",
    paymentStatus: "paid",
    orderStatus: "completed",
  },
  {
    orderId: "#2049",
    customer: "Emir G.",
    amount: "$680",
    paymentStatus: "pending",
    orderStatus: "processing",
  },
  {
    orderId: "#2050",
    customer: "Tina L.",
    amount: "$120",
    paymentStatus: "failed",
    orderStatus: "pending",
  },
];

export default function AdminOrdersPage() {
  return (
    <div className="space-y-8">
      <AdminHeader
        title="Orders"
        subtitle="Review recent orders and track payment status."
      />
      <AdminTable columns={columns} rows={rows} />
    </div>
  );
}
