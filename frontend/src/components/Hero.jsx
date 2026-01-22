// Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(15,23,42,0.06),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(15,23,42,0.06),transparent_45%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Fast • Secure • Doorstep Delivery
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Fuel delivered to your doorstep —{" "}
              <span className="text-slate-900">fast</span> &{" "}
              <span className="text-slate-900">reliable</span>.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              Order Petrol, Diesel, or Kerosene in minutes. Pay securely and
              track your delivery in real-time—no stress, no long queues.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#order"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition"
              >
                Order Fuel
                <span className="ml-2">⛽</span>
              </a>
              <a
                href="#track"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
              >
                Track Delivery
                <span className="ml-2">📍</span>
              </a>
            </div>

            {/* quick trust row */}
            <div className="mt-8 grid grid-cols-3 gap-3 rounded-2xl border border-slate-200 bg-white p-4">
              <div className="text-center">
                <p className="text-lg font-extrabold text-slate-900">24/7</p>
                <p className="text-xs font-medium text-slate-500">Support</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-extrabold text-slate-900">Secure</p>
                <p className="text-xs font-medium text-slate-500">Payments</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-extrabold text-slate-900">Live</p>
                <p className="text-xs font-medium text-slate-500">Tracking</p>
              </div>
            </div>
          </div>

          {/* Right: Mock UI card */}
          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-900">
                  Quick Order
                </p>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  2 mins
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-xs font-semibold text-slate-500">
                    Fuel Type
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                      Petrol
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      Diesel
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      Kerosene
                    </span>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 p-4">
                    <p className="text-xs font-semibold text-slate-500">
                      Quantity
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-900">
                      25 Litres
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 p-4">
                    <p className="text-xs font-semibold text-slate-500">
                      Delivery Time
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-900">
                      Today • 2–4 PM
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-xs font-semibold text-slate-500">
                    Address
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    12 Market Road, City
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Verified location • GPS enabled
                  </p>
                </div>

                <button className="w-full rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition">
                  Proceed to Payment
                </button>
                <p className="text-center text-xs text-slate-500">
                  🔒 Payments protected • receipts available
                </p>
              </div>
            </div>

            {/* floating badge */}
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm md:block">
              <p className="text-xs font-semibold text-slate-500">Avg Delivery</p>
              <p className="text-sm font-extrabold text-slate-900">
                35–60 mins
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
