"use client";

import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/admin" },
  { label: "Users", href: "/admin/users" },
  { label: "Products", href: "/admin/products" },
  { label: "Orders", href: "/admin/orders" },
];

const AdminSidebar = () => {
  return (
    <aside className="hidden lg:flex lg:w-72 xl:w-80 shrink-0 flex-col border-r border-slate-200 bg-white px-6 py-8">
      <div className="mb-10">
        <p className="text-2xl font-bold tracking-tight">IcyTales Admin</p>
        <p className="mt-2 text-sm text-slate-500">Full platform management</p>
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-3xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto rounded-3xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
        <p className="font-semibold">Admin utilities</p>
        <p className="mt-3">
          Use the API routes for data sync and analytics exports.
        </p>
      </div>
    </aside>
  );
};

export default AdminSidebar;
