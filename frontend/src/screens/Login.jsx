// Login.jsx
import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to backend/auth (Firebase, Node, etc.)
    console.log("Login payload:", form);
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
            <p className="text-xs font-semibold text-slate-500">Welcome back</p>
            <h1 className="mt-2 text-3xl font-extrabold text-slate-900">
              Log in to continue
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Access your dashboard, manage orders, track deliveries, and view payment history.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-bold text-slate-900">Secure Payments</p>
                <p className="mt-1 text-xs text-slate-600">Protected checkout & receipts</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-bold text-slate-900">Live Tracking</p>
                <p className="mt-1 text-xs text-slate-600">Know where your fuel is</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <p className="text-xs font-semibold text-slate-500">Account</p>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-900">Login</h2>
            <p className="mt-2 text-sm text-slate-600">
              Enter your details to access your account.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
                  placeholder="••••••••"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
                  required
                />
              </div>

              <div className="flex items-center justify-between gap-3">
                <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={form.remember}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-slate-300"
                  />
                  Remember me
                </label>

                <a
                  href="#"
                  className="text-sm font-semibold text-slate-900 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition"
              >
                Login
              </button>

              <div className="relative py-2">
                <div className="h-px w-full bg-slate-200" />
                <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-xs font-semibold text-slate-500">
                  OR
                </span>
              </div>

              <button
                type="button"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
                onClick={() => alert("Google login coming soon")}
              >
                Continue with Google
              </button>

              <p className="text-center text-sm text-slate-600">
                Don’t have an account?{" "}
                <a
                  href="/signup"
                  className="font-semibold text-slate-900 hover:underline"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>

          <p className="mt-4 text-center text-xs text-slate-500">
            By logging in, you agree to our Terms & Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
