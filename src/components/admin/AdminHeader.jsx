"use client";

const AdminHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-xs uppercase tracking-[0.24em] text-pink-600">
          Admin panel
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">{title}</h1>
        {subtitle && <p className="mt-2 text-sm text-slate-600">{subtitle}</p>}
      </div>
      <div className="rounded-3xl bg-white px-5 py-4 shadow-sm border border-slate-200">
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
          Live session
        </p>
        <p className="mt-2 text-sm font-medium text-slate-900">Admin user</p>
      </div>
    </div>
  );
};

export default AdminHeader;
