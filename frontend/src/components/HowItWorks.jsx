// HowItWorks.jsx
import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      title: "Place an Order",
      desc: "Choose fuel type, quantity, and delivery time.",
      badge: "1",
    },
    {
      title: "Make Payment",
      desc: "Pay securely and get instant confirmation.",
      badge: "2",
    },
    {
      title: "We Deliver",
      desc: "Track live and receive your fuel at your doorstep.",
      badge: "3",
    },
  ];

  return (
    <section className="bg-slate-50" id="how">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <p className="text-xs font-semibold text-slate-500">Simple process</p>
        <h2 className="mt-2 text-2xl font-extrabold text-slate-900 md:text-3xl">
          How it works
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-extrabold text-white">
                  {s.badge}
                </span>
                <h3 className="text-base font-bold text-slate-900">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#order"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
          >
            Order Fuel Now
          </a>
          <a
            href="#track"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100 transition"
          >
            Track a Delivery
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
