const bars = [
  { label: "Jan", value: 45 },
  { label: "Feb", value: 55 },
  { label: "Mar", value: 68 },
  { label: "Apr", value: 80 },
  { label: "May", value: 72 },
  { label: "Jun", value: 90 },
];

const AdminRevenueChart = () => {
  return (
    <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
            Revenue trend
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">
            Last 6 months
          </h2>
        </div>
        <div className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
          Growth +28%
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {bars.map((bar) => (
          <div key={bar.label} className="space-y-2">
            <div className="h-40 rounded-3xl bg-slate-100 overflow-hidden">
              <div
                className="h-full rounded-3xl bg-gradient-to-b from-pink-500 to-rose-500"
                style={{ height: `${bar.value}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span>{bar.label}</span>
              <span>{bar.value}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminRevenueChart;
