// TrackHero.jsx
import React from "react";

const TrackHero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(15,23,42,0.06),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.08),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Live delivery tracking
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Track your delivery
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
              Enter your Order ID to view status and track your driver on the map.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">Tip</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              Keep your phone on — we’ll call on arrival 📞
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackHero;
