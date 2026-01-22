// CTASection.jsx
import React from "react";

const CTASection = () => {
  return (
    <section className="bg-white" id="order">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-white/70">
                Ready to order?
              </p>
              <h2 className="mt-2 text-2xl font-extrabold md:text-3xl">
                Get fuel delivered today.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Place an order in minutes, pay securely, and track your delivery
                live—simple and reliable.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#order"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition"
                >
                  Start Order
                </a>
                <a
                  href="#support"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 transition"
                >
                  Talk to Support
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs font-semibold text-white/70">
                    Fuel Types
                  </p>
                  <p className="mt-2 text-sm font-semibold">Petrol • Diesel</p>
                  <p className="text-sm font-semibold">Kerosene</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <p className="text-xs font-semibold text-white/70">
                    Coverage
                  </p>
                  <p className="mt-2 text-sm font-semibold">
                    City-wide delivery
                  </p>
                  <p className="text-xs text-white/70">More areas soon</p>
                </div>
              </div>

              <div className="mt-3 rounded-2xl bg-white/10 p-4">
                <p className="text-xs font-semibold text-white/70">
                  Delivery Updates
                </p>
                <p className="mt-2 text-sm font-semibold">
                  SMS/Email notifications enabled
                </p>
                <p className="mt-1 text-xs text-white/70">
                  You’ll get alerts at every stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
