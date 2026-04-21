"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminTable from "@/components/admin/AdminTable";
import { useAuth } from "@/components/context/AuthContext";
import { getAdminProducts } from "@/lib/api";
const columns = [
  { key: "title", label: "Product" },
  { key: "category", label: "Category" },
  { key: "price", label: "Price" },
  { key: "stock", label: "Stock" },
  { key: "status", label: "Status" },
];
export default function AdminProductsPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [rows, setRows] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!loading && (!user || user.role !== "admin")) {
      router.push("/admin/login");
    }
  }, [loading, user, router]);
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await getAdminProducts();
        setRows(
          products.map((item) => ({
            title: item.title,
            category: item.category,
            price: `$${item.price.toFixed(2)}`,
            stock: item.stock ?? 0,
            status: item.status || "active",
          })),
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingData(false);
      }
    };

    loadProducts();
  }, []);

  return (
    
    <div className="space-y-8">
      <AdminHeader
        title="Products"
        subtitle="Create, update, and delete travel packages."
      />
      {loadingData ? (
        <div className="rounded-4xl border border-slate-200 bg-white p-8 text-center text-slate-600">
          Loading products...
        </div>
      ) : (
        <AdminTable columns={columns} rows={rows} />
      )}
    </div>
  );
}
