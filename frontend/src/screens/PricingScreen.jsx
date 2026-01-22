// PricingScreen.jsx
import React, { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PricingScreen = () => {
  // Demo prices (change to your real prices later)
  const PRICES = useMemo(
    () => ({
      petrol: 720,
      diesel: 1250,
      kerosene: 980,
    }),
    []
  );

  const [fuelType, setFuelType] = useState("petrol");
  const [litres, setLitres] = useState(10);

  const pricePerLitre = PRICES[fuelType] || 0;
  const l = Number(litres || 0);
  const total = l * pricePerLitre;

  const formatNaira = (n) => `₦ ${Number(n).toLocaleString("en-NG")}`;

  const fuelLabel = (t) => {
    if (t === "petrol") return "Petrol";
    if (t === "diesel") return "Diesel";
    if (t === "kerosene") return "Kerosene";
    return "Fuel";
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="bg-slate-50">
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          {/* Header */}
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500">Pricing</p>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                Simple pricing per litre
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
                Select a fuel type and number of litres to see the estimated cost.
                (Delivery fee not included here.)
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <p className="text-xs font-semibold text-slate-500">Note</p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                Prices may change based on location & supply.
              </p>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="mt-8 grid gap-6 md:grid-cols-[1fr_420px]">
            {/* Left controls + table */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-extrabold text-slate-900">
                    Fuel price list
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Current standard prices per litre.
                  </p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  Per Litre
                </span>
              </div>

              {/* Table */}
              <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
                <div className="grid grid-cols-3 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-600">
                  <span>Fuel</span>
                  <span className="text-center">Price/Litre</span>
                  <span className="text-right">Status</span>
                </div>

                {[
                  { key: "petrol", name: "Petrol", price: PRICES.petrol, status: "Available" },
                  { key: "diesel", name: "Diesel", price: PRICES.diesel, status: "Available" },
                  { key: "kerosene", name: "Kerosene", price: PRICES.kerosene, status: "Available" },
                ].map((row) => {
                  const active = fuelType === row.key;
                  return (
                    <button
                      key={row.key}
                      type="button"
                      onClick={() => setFuelType(row.key)}
                      className={`grid w-full grid-cols-3 items-center px-4 py-4 text-left text-sm transition ${
                        active ? "bg-slate-900 text-white" : "bg-white hover:bg-slate-50"
                      }`}
                    >
                      <span className="font-semibold">{row.name}</span>
                      <span className={`text-center font-semibold ${active ? "text-white" : "text-slate-900"}`}>
                        {formatNaira(row.price)}
                      </span>
                      <span className={`text-right text-xs font-semibold ${active ? "text-white/80" : "text-emerald-700"}`}>
                        {row.status}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Litres selector */}
              <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  <label className="text-xs font-semibold text-slate-500">
                    Enter Litres
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={litres}
                    onChange={(e) => setLitres(e.target.value)}
                    className="mt-1 w-full bg-transparent text-lg font-extrabold text-slate-900 outline-none"
                  />
                  <p className="mt-1 text-xs text-slate-500">
                    Example: 10, 20, 50 litres
                  </p>
                </div>

                <div className="flex gap-2">
                  {[5, 10, 20, 50].map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setLitres(q)}
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 transition"
                    >
                      {q}L
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold text-slate-600">
                  Selected: {fuelLabel(fuelType)}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {formatNaira(pricePerLitre)} per litre
                </p>
              </div>
            </div>

            {/* Right summary */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">
              <p className="text-sm font-extrabold text-slate-900">Estimate</p>
              <p className="mt-1 text-xs text-slate-500">
                Quick calculation (fuel only).
              </p>

              <div className="mt-5 space-y-3">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-xs font-semibold text-slate-500">Fuel Type</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {fuelLabel(fuelType)}
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-xs font-semibold text-slate-500">Litres</p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {l} L
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Price/Litre</span>
                    <span className="font-semibold text-slate-900">
                      {formatNaira(pricePerLitre)}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-slate-600">Fuel cost</span>
                    <span className="font-semibold text-slate-900">
                      {formatNaira(total)}
                    </span>
                  </div>

                  <div className="mt-3 h-px w-full bg-slate-200" />

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-700">
                      Estimated Total
                    </span>
                    <span className="text-base font-extrabold text-slate-900">
                      {formatNaira(total)}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-500">
                    Delivery fee will be added at checkout on the Order page.
                  </p>
                </div>

                <a
                  href="/order"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition"
                >
                  Go to Order Page
                </a>

                <p className="text-center text-xs text-slate-500">
                  Prices are estimates and can vary by area.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PricingScreen;
