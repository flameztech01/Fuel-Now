// OrderHero.jsx
import React from "react";

const OrderHero = () => {
  return (
    <section className="relative overflow-hidden bg-white" id="order-hero">
      {/* soft background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(15,23,42,0.06),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.08),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Order in minutes • Track in real time
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Place your fuel order{" "}
              <span className="text-slate-900">quickly</span> and{" "}
              <span className="text-slate-900">securely</span>.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              Select fuel type, enter quantity, choose delivery time, and pay.
              We’ll deliver straight to your location.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl border border-slate-200 bg-white p-4">
              <div className="text-center">
                <p className="text-lg font-extrabold text-slate-900">Petrol</p>
                <p className="text-xs font-medium text-slate-500">Available</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-extrabold text-slate-900">Diesel</p>
                <p className="text-xs font-medium text-slate-500">Available</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-extrabold text-slate-900">Kero</p>
                <p className="text-xs font-medium text-slate-500">Available</p>
              </div>
            </div>
          </div>

          {/* Right: Order summary card preview */}
          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">
                  Order Summary
                </p>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  Step 1 of 3
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-xs font-semibold text-slate-500">
                    Selected Fuel
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    Petrol
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 p-4">
                    <p className="text-xs font-semibold text-slate-500">
                      Quantity
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-900">
                      10 Litres
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-4">
                    <p className="text-xs font-semibold text-slate-500">
                      Est. Total
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-900">
                      ₦ — —
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-xs font-semibold text-slate-500">
                    Delivery Address
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    Set location to continue
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    GPS recommended for accurate delivery
                  </p>
                </div>

                <button className="w-full rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition">
                  Start Order
                </button>

                <p className="text-center text-xs text-slate-500">
                  🔒 Secure checkout • Delivery updates included
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm md:block">
              <p className="text-xs font-semibold text-slate-500">
                Typical Delivery
              </p>
              <p className="text-sm font-extrabold text-slate-900">35–60 mins</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderHero;
