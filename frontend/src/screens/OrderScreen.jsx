import React from "react";
import Navbar from "../components/Navbar";
import OrderHero from "../components/OrderHero";
import FuelTypeSelector from "../components/FuelTypeSelector";
import QuantityPicker from "../components/QuantityPicker";
import DeliveryDetails from "../components/DeliveryDetails";
import DeliveryTimePicker from "../components/DeliveryTimePicker";
import PriceBreakdown from "../components/PriceBreakDown";
import OrderForm from "../components/OrderForm";

import Footer from "../components/Footer";

import { 
    useState
} from 'react'

const OrderScreen = () => {

                const [fuelType, setFuelType] = useState("petrol");
                const [litres, setLitres] = useState(10);
                const [address, setAddress] = useState("");
                const [phone, setPhone] = useState("");
                const [note, setNote] = useState("");
                const [slot, setSlot] = useState("asap");
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <OrderHero />

        <section className="bg-slate-50">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 md:grid-cols-[1fr_420px] md:px-6">
            <OrderForm
              fuelType={fuelType}
              setFuelType={setFuelType}
              litres={litres}
              setLitres={setLitres}
              address={address}
              setAddress={setAddress}
              phone={phone}
              setPhone={setPhone}
              note={note}
              setNote={setNote}
              slot={slot}
              setSlot={setSlot}
            />

            <PriceBreakdown
              fuelType={fuelType}
              litres={litres}
              fee={1500}
              pricePerLitre={0} // set later
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OrderScreen;
