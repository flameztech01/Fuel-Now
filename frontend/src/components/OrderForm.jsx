// OrderForm.jsx
import React from "react";
import FuelTypeSelector from "./FuelTypeSelector";
import QuantityPicker from "./QuantityPicker";
import DeliveryDetails from "./DeliveryDetails";
import DeliveryTimePicker from "./DeliveryTimePicker";

const OrderForm = ({
  fuelType,
  setFuelType,
  litres,
  setLitres,
  address,
  setAddress,
  phone,
  setPhone,
  note,
  setNote,
  slot,
  setSlot,
}) => {
  return (
    <div className="space-y-4">
      <FuelTypeSelector value={fuelType} onChange={setFuelType} />
      <QuantityPicker litres={litres} setLitres={setLitres} />
      <DeliveryDetails
        address={address}
        setAddress={setAddress}
        phone={phone}
        setPhone={setPhone}
        note={note}
        setNote={setNote}
      />
      <DeliveryTimePicker slot={slot} setSlot={setSlot} />
    </div>
  );
};

export default OrderForm;
