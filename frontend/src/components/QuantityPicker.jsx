// QuantityPicker.jsx
import React from "react";

const QuantityPicker = ({ litres, setLitres, min = 5, max = 200, step = 5 }) => {
  const dec = () => setLitres((p) => Math.max(min, Number(p) - step));
  const inc = () => setLitres((p) => Math.min(max, Number(p) + step));

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-extrabold text-slate-900">Quantity</p>
          <p className="mt-1 text-xs text-slate-500">
            Select how many litres you want. (Min {min}L)
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          Step 2
        </span>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
          <label className="text-xs font-semibold text-slate-500">Litres</label>
          <input
            type="number"
            min={min}
            max={max}
            step={step}
            value={litres}
            onChange={(e) => setLitres(e.target.value)}
            className="mt-1 w-full bg-transparent text-lg font-extrabold text-slate-900 outline-none"
          />
          <p className="mt-1 text-xs text-slate-500">Step: {step} litres</p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={dec}
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-lg font-bold text-slate-900 hover:bg-slate-50 transition"
            aria-label="Decrease litres"
          >
            −
          </button>
          <button
            type="button"
            onClick={inc}
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-lg font-bold text-slate-900 hover:bg-slate-50 transition"
            aria-label="Increase litres"
          >
            +
          </button>
        </div>
      </div>

      <div className="mt-4 grid gap-2 sm:grid-cols-4">
        {[10, 20, 30, 50].map((q) => (
          <button
            key={q}
            type="button"
            onClick={() => setLitres(q)}
            className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
          >
            {q}L
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuantityPicker;
