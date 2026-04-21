"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminMetricCard from "@/components/admin/AdminMetricCard";
import AdminRevenueChart from "@/components/admin/AdminRevenueChart";
import { useAuth } from "@/components/context/AuthContext";
import { getUsers, getAdminOrders, getAdminProducts } from "@/lib/api";

export default function AdminDashboard() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [stats, setStats] = useState({
    users: 0,
    products: 0,
    orders: 0,
    revenue: 0,
  });
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!loading && (!user || user.role !== "admin")) {
      router.push("/admin/login");
    }
  }, [loading, user, router]);

  useEffect(() => {
    const loadStats = async () => {
      try {
        const [users, products, orders] = await Promise.all([
          getUsers(),
          getAdminProducts(),
          getAdminOrders(),
        ]);
        const revenue = orders.reduce(
          (sum, order) => sum + (order.totalPrice || 0),
          0,
        );
        setStats({
          users: users.length,
          products: products.length,
          orders: orders.length,
          revenue,
        });
      } catch (error) {
        console.error("Admin stats error", error);
      } finally {
        setLoadingData(false);
      }
    };
    loadStats();
  }, []);

  const metrics = [
    {
      title: "Total users",
      value: stats.users,
      delta: "+12% this month",
      note: "User growth is accelerating.",
    },
    {
      title: "Products",
      value: stats.products,
      delta: "+8% inventory",
      note: "New travel deals added.",
    },
    {
      title: "Orders",
      value: stats.orders,
      delta: "+22% since last week",
      note: "Strong conversion rate.",
    },
    {
      title: "Revenue",
      value: `$${stats.revenue.toLocaleString()}`,
      delta: "+31% monthly",
      note: "Healthy platform momentum.",
    },
  ];

  return (
    <div className="space-y-8">
      <AdminHeader
        title="Dashboard"
        subtitle="Live snapshot of IcyTales platform performance."
      />
      {loadingData ? (
        <div className="rounded-4xl border border-slate-200 bg-white p-8 text-center text-slate-600">
          Loading dashboard...
        </div>
      ) : (
        <>
          <div className="grid gap-6 xl:grid-cols-4">
            {metrics.map((card) => (
              <AdminMetricCard key={card.title} {...card} />
            ))}
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <AdminRevenueChart />
            <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
                    Quick actions
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-900">
                    Command center
                  </h2>
                </div>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4">
                  Review pending user approvals.
                </li>
                <li className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4">
                  Approve new products and update inventory.
                </li>
                <li className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4">
                  Check orders with failed payments.
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
