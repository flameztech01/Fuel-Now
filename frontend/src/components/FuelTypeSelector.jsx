// FuelTypeSelector.jsx
import React from "react";

const FuelTypeSelector = ({ value, onChange }) => {
  const options = [
    { id: "petrol", name: "Petrol", hint: "Fast delivery", icon: "⛽" },
    { id: "diesel", name: "Diesel", hint: "For generators & vehicles", icon: "🚛" },
    { id: "kerosene", name: "Kerosene", hint: "Home use", icon: "🔥" },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-extrabold text-slate-900">Fuel Type</p>
          <p className="mt-1 text-xs text-slate-500">
            Choose the type of fuel you want delivered.
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          Step 1
        </span>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {options.map((o) => {
          const active = value === o.id;
          return (
            <button
              key={o.id}
              type="button"
              onClick={() => onChange(o.id)}
              className={`group rounded-3xl border p-4 text-left transition ${
                active
                  ? "border-slate-900 bg-slate-900 text-white shadow-sm"
                  : "border-slate-200 bg-white hover:bg-slate-50"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl text-lg ${
                    active ? "bg-white/10" : "bg-slate-100"
                  }`}
                >
                  {o.icon}
                </div>
                <span
                  className={`text-xs font-semibold ${
                    active ? "text-white/80" : "text-slate-400"
                  }`}
                >
                  {active ? "Selected" : "Select"}
                </span>
              </div>

              <p className={`mt-3 text-sm font-bold ${active ? "text-white" : "text-slate-900"}`}>
                {o.name}
              </p>
              <p className={`mt-1 text-xs ${active ? "text-white/75" : "text-slate-500"}`}>
                {o.hint}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FuelTypeSelector;
