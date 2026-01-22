// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white" id="support">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white font-bold">
                ⛽
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-slate-900">FuelNow</p>
                <p className="text-xs text-slate-500 -mt-0.5">Delivery</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Order fuel, pay securely, and get it delivered to your location
              with live tracking.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-slate-900">Quick Links</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a className="text-slate-600 hover:text-slate-900" href="#order">
                  Order Fuel
                </a>
              </li>
              <li>
                <a className="text-slate-600 hover:text-slate-900" href="#track">
                  Track Delivery
                </a>
              </li>
              <li>
                <a className="text-slate-600 hover:text-slate-900" href="#how">
                  How it Works
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold text-slate-900">Support</p>
            <p className="mt-3 text-sm text-slate-600">
              Email: support@fuelnow.com
            </p>
            <p className="mt-1 text-sm text-slate-600">Phone: +234 000 000 0000</p>
            <p className="mt-3 text-xs text-slate-500">
              © {new Date().getFullYear()} FuelNow. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
