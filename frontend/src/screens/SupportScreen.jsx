// SupportScreen.jsx
import React, { useState } from "react";
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const SupportScreen = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    topic: "order",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send to backend / email service
    console.log("Support request:", form);
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ fullName: "", email: "", phone: "", topic: "order", message: "" });
  };

  const faqs = [
    {
      q: "How long does delivery take?",
      a: "Delivery time depends on your location and availability. Typical delivery is 35–60 mins.",
    },
    {
      q: "Is payment secure?",
      a: "Yes. Payments are processed securely and you receive an instant receipt/confirmation.",
    },
    {
      q: "Can I track my driver?",
      a: "Yes. Use the Track Delivery page and enter your Order ID to see live updates and the map.",
    },
    {
      q: "What if my address is hard to find?",
      a: "Add a clear landmark in the delivery note (e.g., “Near Zenith Bank”), and keep your phone on.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="bg-slate-50">
        {/* Header */}
        <section className="relative overflow-hidden bg-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(15,23,42,0.06),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.08),transparent_45%)]" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-500">Support</p>
                <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                  How can we help?
                </h1>
                <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
                  Reach our support team, check FAQs, or send us a message and we’ll respond as soon as possible.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold text-slate-500">Quick contact</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  support@fuelnow.com
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  +234 000 000 0000
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
          <div className="grid gap-6 md:grid-cols-[1fr_420px]">
            {/* FAQs */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-extrabold text-slate-900">FAQs</p>
                  <p className="mt-1 text-xs text-slate-500">
                    Quick answers to common questions.
                  </p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  Help
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {faqs.map((f, idx) => (
                  <details
                    key={idx}
                    className="group rounded-2xl border border-slate-200 bg-white p-4 open:bg-slate-50"
                  >
                    <summary className="cursor-pointer list-none">
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-sm font-bold text-slate-900">
                          {f.q}
                        </p>
                        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 text-slate-700 group-open:bg-slate-900 group-open:text-white transition">
                          +
                        </span>
                      </div>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold text-slate-600">
                  Need to track an order?
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Go to Track Delivery and enter your Order ID.
                </p>
                <a
                  href="/track"
                  className="mt-3 inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition"
                >
                  Track Delivery
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-extrabold text-slate-900">Send a message</p>
                  <p className="mt-1 text-xs text-slate-500">
                    We typically reply within a few hours.
                  </p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Contact
                </span>
              </div>

              {sent && (
                <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                  Message sent! We’ll get back to you shortly ✅
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Full Name
                  </label>
                  <input
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
                    required
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-slate-700">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700">
                      Phone
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+234 000 000 0000"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Topic
                  </label>
                  <select
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400"
                  >
                    <option value="order">Order Issues</option>
                    <option value="payment">Payment</option>
                    <option value="delivery">Delivery</option>
                    <option value="account">Account</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Explain the issue briefly. Include your Order ID if you have one."
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition"
                >
                  Send Message
                </button>

                <p className="text-center text-xs text-slate-500">
                  Please don’t share sensitive card details in your message.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SupportScreen;
