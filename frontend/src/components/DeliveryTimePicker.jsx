// DeliveryTimePicker.jsx
import React from "react";

const DeliveryTimePicker = ({ slot, setSlot }) => {
  const slots = [
    { id: "asap", label: "ASAP", sub: "Fastest possible" },
    { id: "2-4", label: "2–4 PM", sub: "Afternoon slot" },
    { id: "4-6", label: "4–6 PM", sub: "Evening slot" },
    { id: "scheduled", label: "Schedule", sub: "Pick a time later" },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-extrabold text-slate-900">Delivery Time</p>
          <p className="mt-1 text-xs text-slate-500">
            Choose when you want your order delivered.
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          Step 4
        </span>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {slots.map((s) => {
          const active = slot === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setSlot(s.id)}
              className={`rounded-3xl border p-4 text-left transition ${
                active
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white hover:bg-slate-50"
              }`}
            >
              <p className={`text-sm font-bold ${active ? "text-white" : "text-slate-900"}`}>
                {s.label}
              </p>
              <p className={`mt-1 text-xs ${active ? "text-white/75" : "text-slate-500"}`}>
                {s.sub}
              </p>
            </button>
          );
        })}
      </div>

      {slot === "scheduled" && (
        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold text-slate-600">
            Scheduled delivery (UI placeholder)
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Later we can add date/time picker here.
          </p>
        </div>
      )}
    </div>
  );
};

export default DeliveryTimePicker;
