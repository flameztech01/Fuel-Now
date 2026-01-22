// Signup.jsx
import React, { useState } from "react";

const Signup = () => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: true,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!form.acceptTerms) {
      setError("Please accept the Terms & Privacy Policy.");
      return;
    }

    // TODO: connect to backend/auth (Firebase, Node, etc.)
    console.log("Signup payload:", form);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top mini header */}
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-6">
        <a href="/" className="inline-flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white font-bold">
            ⛽
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-900">FuelNow</p>
            <p className="text-xs text-slate-500 -mt-0.5">Delivery</p>
          </div>
        </a>
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-16 md:grid-cols-2 md:px-6">
        {/* Left: Info */}
        <div className="hidden md:block">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold text-slate-500">Create account</p>
            <h1 className="mt-2 text-3xl font-extrabold text-slate-900">
              Join FuelNow today
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Create your account to order fuel, save addresses, and track deliveries easily.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-bold text-slate-900">Save Addresses</p>
                <p className="mt-1 text-xs text-slate-600">Home, office, and more</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-bold text-slate-900">Order History</p>
                <p className="mt-1 text-xs text-slate-600">Quick re-order anytime</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-bold text-slate-900">Faster Checkout</p>
                <p className="mt-1 text-xs text-slate-600">Secure payments made simple</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <p className="text-xs font-semibold text-slate-500">Account</p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900">Sign up</h2>
            <p className="mt-2 text-sm text-slate-600">
              Create your account in less than a minute.
            </p>

            {error && (
              <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Full Name
                </label>
                <input
                  name="fullName"
                  type="text"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+234 000 000 0000"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
                  required
                />
              </div>

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
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Minimum 8 characters"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter password"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
                  required
                />
              </div>

              <label className="flex items-start gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={form.acceptTerms}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-slate-300"
                />
                <span>
                  I agree to the{" "}
                  <a href="#" className="font-semibold text-slate-900 hover:underline">
                    Terms
                  </a>{" "}
                  &{" "}
                  <a href="#" className="font-semibold text-slate-900 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>

              <button
                type="submit"
                className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition"
              >
                Create Account
              </button>

              <p className="text-center text-sm text-slate-600">
                Already have an account?{" "}
                <a href="/login" className="font-semibold text-slate-900 hover:underline">
                  Login
                </a>
              </p>
            </form>
          </div>

          <p className="mt-4 text-center text-xs text-slate-500">
            You can update your profile and addresses after signing up.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
