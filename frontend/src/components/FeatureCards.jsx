// FeatureCards.jsx
import React from "react";

const FeatureCards = () => {
  const features = [
    {
      title: "Fast Doorstep Delivery",
      desc: "Get fuel delivered to your location quickly—no queues, no stress.",
      icon: "🚚",
    },
    {
      title: "Secure Payments",
      desc: "Pay safely with card, transfer, or wallet and receive instant receipts.",
      icon: "🔒",
    },
    {
      title: "Real-Time Tracking",
      desc: "Track your rider/driver live and see delivery progress clearly.",
      icon: "📍",
    },
    {
      title: "Verified Fuel Quality",
      desc: "Quality checks and sealed delivery process for peace of mind.",
      icon: "✅",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-slate-500">Why choose us</p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900 md:text-3xl">
              Built for speed, safety & convenience
            </h2>
          </div>
          <a
            href="#order"
            className="hidden rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition md:inline-flex"
          >
            Start Ordering →
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-lg">
                {f.icon}
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
