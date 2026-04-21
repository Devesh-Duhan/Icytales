"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminTable from "@/components/admin/AdminTable";
import { useAuth } from "@/components/context/AuthContext";
import { getAdminProducts, createProduct, updateProduct, deleteProduct } from "@/lib/api";
import ProductModal from "@/components/admin/ProductModal";
import Button from "@/components/common/Button";
export default function AdminProductsPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [products, setProducts] = useState([]);
  const [rows, setRows] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const columns = [
    { key: "title", label: "Product" },
    { key: "category", label: "Category" },
    { key: "price", label: "Price" },
    { key: "stock", label: "Stock" },
    { key: "status", label: "Status" },
    { 
      key: "actions", 
      label: "Actions", 
      render: (row) => (
        <div className="flex gap-3">
          <button 
            onClick={() => handleEdit(row)}
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            Edit
          </button>
          <button 
            onClick={() => handleDelete(row._id)}
            className="text-red-500 hover:text-red-700 font-medium"
          >
            Delete
          </button>
        </div>
      )
    },
  ];

  const loadProducts = async () => {
    setLoadingData(true);
    try {
      const data = await getAdminProducts();
      setProducts(data);
      setRows(
        data.map((item) => ({
          _id: item._id,
          title: item.title,
          category: item.category,
          price: `$${item.price.toFixed(2)}`,
          stock: item.stock ?? 0,
          status: (
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${item.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'}`}>
              {item.status || "active"}
            </span>
          ),
          ...item
        })),
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    if (!loading && (!user || user.role !== "admin")) {
      router.push("/admin/login");
    }
  }, [loading, user, router]);
  useEffect(() => {
    loadProducts();
  }, []);

  const handleAdd = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteProduct(id);
        loadProducts();
      } catch (error) {
        alert("Failed to delete: " + error.message);
      }
    }
  };

  const handleSave = async (formData) => {
    if (editingProduct) {
      await updateProduct(editingProduct._id, formData);
    } else {
      await createProduct(formData);
    }
    loadProducts();
  };

  return (
    
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <AdminHeader
          title="Products"
          subtitle="Create, update, and delete travel packages."
        />
        <Button 
          theme="primary" 
          onClick={handleAdd}
          className="sm:w-auto"
        >
          + Add Product
        </Button>
      </div>

      {loadingData ? (
        <div className="rounded-[32px] border border-slate-200 bg-white p-12 text-center text-slate-600 shadow-sm">
          <div className="mx-auto w-10 h-10 border-4 border-[#F83D8E] border-t-transparent animate-spin rounded-full mb-4" />
          Loading products...
        </div>
      ) : (
        <AdminTable columns={columns} rows={rows} />
      )}

      <ProductModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={editingProduct}
        onSave={handleSave}
      />
    </div>
  );
}
