// DeliveryDetails.jsx
import React from "react";

const DeliveryDetails = ({
  address,
  setAddress,
  phone,
  setPhone,
  note,
  setNote,
}) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-extrabold text-slate-900">Delivery Details</p>
          <p className="mt-1 text-xs text-slate-500">
            Enter where you want the fuel delivered and your contact number.
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          Step 3
        </span>
      </div>

      <div className="mt-4 grid gap-4">
        <div>
          <label className="text-sm font-semibold text-slate-700">
            Delivery Address
          </label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="e.g. 12 Market Road, City"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
            required
          />
          <p className="mt-2 text-xs text-slate-500">
            Tip: use a landmark for faster delivery (e.g. “Near Zenith Bank”).
          </p>
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700">Phone Number</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+234 000 000 0000"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
            required
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700">
            Delivery Note (Optional)
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Any special instruction? Gate code, call on arrival, etc."
            rows={3}
            className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400"
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
