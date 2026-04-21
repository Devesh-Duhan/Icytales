"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminTable from "@/components/admin/AdminTable";
import { useAuth } from "@/components/context/AuthContext";
import { getUsers } from "@/lib/api";

const columns = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "role", label: "Role" },
  { key: "status", label: "Status" },
  { key: "createdAt", label: "Joined" },
];

export default function AdminUsersPage() {
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
    const loadUsers = async () => {
      try {
        const users = await getUsers();
        setRows(
          users.map((item) => ({
            name: item.name,
            email: item.email,
            role: item.role,
            status: item.isBlocked ? "blocked" : "active",
            createdAt: new Date(item.createdAt).toLocaleDateString(),
          })),
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingData(false);
      }
    };

    loadUsers();
  }, []);

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
        setLoadingData(false);
      }
    };

    loadUsers();
  }, []);

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
