/** @format */

import AdminSidebar from "@/components/admin/AdminSidebar";

export const metadata = {
  title: "IcyTales Admin Dashboard",
  description: "Admin panel for managing users, products and orders",
};

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900">
      <AdminSidebar />
      <main className="flex-1 px-4 py-6 lg:px-10 lg:py-8">{children}</main>
    </div>
  );
}
