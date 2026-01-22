import React from 'react'
import Navbar from '../components/Navbar'
import TrackHero from '../components/TrackHero'
import TrackerPanel from '../components/TrackerPanel'
import DeliveryMap from '../components/DeliveryMap'

import Footer from '../components/Footer'

import { useState } from 'react'

const TrackDeliveryScreen = () => {

    const [orderId, setOrderId] = useState("FN-23910");

  const [tracking, setTracking] = useState({
    status: "on_the_way",
    statusLabel: "On the Way",
    updatedAt: "Just now",
    eta: "35–60 mins",
    driverName: "Ibrahim",
    address: "12 Market Road, City",
    note: "Near the blue gate. Call on arrival.",
    userLocation: { lat: 6.52438, lng: 3.3792 }, // sample (Lagos)
    driverLocation: { lat: 6.5348, lng: 3.3656 },
  });

  const onSearch = () => {
    // TODO: fetch tracking by orderId from backend
    // For now, just simulate change:
    setTracking((prev) => ({
      ...prev,
      updatedAt: "A moment ago",
      status: prev.status === "confirmed" ? "preparing" : prev.status,
    }));
  };

  return (
   <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <TrackHero />

        <section className="bg-slate-50">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-12 md:grid-cols-[420px_1fr] md:px-6">
            <TrackerPanel
              orderId={orderId}
              setOrderId={setOrderId}
              onSearch={onSearch}
              tracking={tracking}
            />

            <DeliveryMap
              userLocation={tracking.userLocation}
              driverLocation={tracking.driverLocation}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default TrackDeliveryScreen
