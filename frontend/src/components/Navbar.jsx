import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Order Fuel", to: "/order" },
    { name: "Track Delivery", to: "/track" },
    { name: "Pricing", to: "/pricing" },
    { name: "Support", to: "/support" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white font-bold">
            ⛽
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-900 md:text-base">
              FuelNow
            </p>
            <p className="text-xs text-slate-500 -mt-0.5">Delivery</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition"
          >
            Login
          </Link>
          <Link
            to="/order"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition"
          >
            Order Fuel
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 shadow-sm hover:bg-slate-50 transition"
          aria-label="Toggle menu"
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-4">
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition"
                >
                  {link.name}
                  <span className="text-slate-400">›</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-3">
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="rounded-xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
            >
              Login
            </Link>
            <Link
              to="/order"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition"
            >
              Order Fuel
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
