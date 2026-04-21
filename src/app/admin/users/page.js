"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminTable from "@/components/admin/AdminTable";
import { useAuth } from "@/components/context/AuthContext";
import { getUsers } from "@/lib/api";
export default function AdminUsersPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [rows, setRows] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
    { key: "status", label: "Status" },
    { key: "createdAt", label: "Joined" },
    {
      key: "actions",
      label: "Actions",
      render: (row) => (
        <button
          onClick={() => handleDelete(row._id)}
          className="text-red-500 hover:text-red-700 font-medium"
        >
          Delete
        </button>
      ),
    },
  ];

  const loadUsers = async () => {
    setLoadingData(true);
    try {
      const users = await getUsers();
      setRows(
        users.map((item) => ({
          _id: item._id,
          name: item.name,
          email: item.email,
          role: item.role,
          status: (
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.isBlocked ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {item.isBlocked ? "blocked" : "active"}
            </span>
          ),
          createdAt: new Date(item.createdAt).toLocaleDateString(),
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
    loadUsers();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const { deleteUser: deleteUserApi } = await import("@/lib/api");
        await deleteUserApi(id);
        loadUsers();
      } catch (error) {
        alert("Failed to delete user: " + error.message);
      }
    }
  };

  return (
    <div className="space-y-8">
      <AdminHeader
        title="Users"
        subtitle="Manage user accounts, block users, and review activity."
      />
      {loadingData ? (
        <div className="rounded-4xl border border-slate-200 bg-white p-8 text-center text-slate-600">
          Loading users...
        </div>
      ) : (
        <AdminTable columns={columns} rows={rows} />
      )}
    </div>
  );
}
