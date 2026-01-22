// PriceBreakdown.jsx
import React from "react";

const prettyFuelName = (fuelType) => {
  if (fuelType === "petrol") return "Petrol";
  if (fuelType === "diesel") return "Diesel";
  if (fuelType === "kerosene") return "Kerosene";
  return "—";
};

const PriceBreakdown = ({
  fuelType,
  litres,
  fee = 1500,
  pricePerLitre = 0, // you can set a real value later
}) => {
  const l = Number(litres || 0);
  const subtotal = l * Number(pricePerLitre || 0);
  const total = subtotal + fee;

  const formatNaira = (n) =>
    n === 0 ? "₦ — —" : `₦ ${Number(n).toLocaleString("en-NG")}`;

  return (
    <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-extrabold text-slate-900">Summary</p>
      <p className="mt-1 text-xs text-slate-500">
        Review your order before payment.
      </p>

      <div className="mt-4 space-y-3">
        <div className="rounded-2xl border border-slate-200 p-4">
          <p className="text-xs font-semibold text-slate-500">Fuel</p>
          <p className="mt-1 text-sm font-semibold text-slate-900">
            {prettyFuelName(fuelType)}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-4">
          <p className="text-xs font-semibold text-slate-500">Quantity</p>
          <p className="mt-1 text-sm font-semibold text-slate-900">
            {l ? `${l} Litres` : "—"}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-600">Subtotal</span>
            <span className="font-semibold text-slate-900">
              {formatNaira(subtotal)}
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="text-slate-600">Delivery fee</span>
            <span className="font-semibold text-slate-900">
              ₦ {Number(fee).toLocaleString("en-NG")}
            </span>
          </div>
          <div className="mt-3 h-px w-full bg-slate-200" />
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-700">Total</span>
            <span className="text-base font-extrabold text-slate-900">
              {formatNaira(total)}
            </span>
          </div>

          <p className="mt-2 text-xs text-slate-500">
            Add real fuel price later (API). This is UI-only for now.
          </p>
        </div>

        <button
          type="button"
          className="w-full rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-500 transition"
          onClick={() => alert("Proceed to payment (next screen)")}
        >
          Proceed to Payment
        </button>

        <p className="text-center text-xs text-slate-500">
          🔒 Secure checkout • Instant receipt
        </p>
      </div>
    </div>
  );
};

export default PriceBreakdown;
