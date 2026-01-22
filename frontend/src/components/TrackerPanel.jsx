// TrackerPanel.jsx
import React from "react";

const steps = [
  { key: "confirmed", label: "Order Confirmed" },
  { key: "preparing", label: "Preparing" },
  { key: "on_the_way", label: "On the Way" },
  { key: "delivered", label: "Delivered" },
];

const statusIndex = (status) => steps.findIndex((s) => s.key === status);

const TrackerPanel = ({ orderId, setOrderId, onSearch, tracking }) => {
  const idx = statusIndex(tracking.status);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-extrabold text-slate-900">Tracker</p>
          <p className="mt-1 text-xs text-slate-500">
            Paste your Order ID to fetch tracking updates.
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          Live
        </span>
      </div>

      {/* Search */}
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <input
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Enter Order ID (e.g. FN-23910)"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
        />
        <button
          type="button"
          onClick={onSearch}
          className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
        >
          Track
        </button>
      </div>

      {/* Meta */}
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-4">
          <p className="text-xs font-semibold text-slate-500">Status</p>
          <p className="mt-1 text-sm font-extrabold text-slate-900">
            {tracking.statusLabel}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Updated: {tracking.updatedAt}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 p-4">
          <p className="text-xs font-semibold text-slate-500">ETA</p>
          <p className="mt-1 text-sm font-extrabold text-slate-900">
            {tracking.eta}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Driver: {tracking.driverName}
          </p>
        </div>
      </div>

      {/* Stepper */}
      <div className="mt-5">
        <p className="text-xs font-semibold text-slate-500">Progress</p>

        <div className="mt-3 space-y-3">
          {steps.map((s, i) => {
            const done = i <= idx;
            const isCurrent = i === idx;

            return (
              <div key={s.key} className="flex items-start gap-3">
                <div className="mt-0.5 flex flex-col items-center">
                  <div
                    className={`h-8 w-8 rounded-2xl flex items-center justify-center text-sm font-extrabold ${
                      done ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {done ? "✓" : i + 1}
                  </div>
                  {i !== steps.length - 1 && (
                    <div
                      className={`mt-2 h-6 w-1 rounded-full ${
                        i < idx ? "bg-emerald-600" : "bg-slate-200"
                      }`}
                    />
                  )}
                </div>

                <div className="flex-1">
                  <p
                    className={`text-sm font-bold ${
                      done ? "text-slate-900" : "text-slate-600"
                    }`}
                  >
                    {s.label}
                    {isCurrent && (
                      <span className="ml-2 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                        Current
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {i === 0 && "We’ve received your request."}
                    {i === 1 && "Your order is being prepared for dispatch."}
                    {i === 2 && "Driver is on the way to your location."}
                    {i === 3 && "Order completed successfully."}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold text-slate-600">Delivery Address</p>
          <p className="mt-1 text-sm font-semibold text-slate-900">
            {tracking.address}
          </p>
          <p className="mt-1 text-xs text-slate-500">{tracking.note}</p>
        </div>
      </div>
    </div>
  );
};

export default TrackerPanel;
