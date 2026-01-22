// DeliveryMap.jsx
import React, { useMemo } from "react";
import { GoogleMap, Marker, Polyline, useJsApiLoader } from "@react-google-maps/api";

/**
 * Install:
 * npm i @react-google-maps/api
 *
 * Add env:
 * Vite:  VITE_GOOGLE_MAPS_API_KEY=YOUR_KEY
 * CRA:   REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_KEY
 */

const containerStyle = {
  width: "100%",
  height: "520px",
};

const DeliveryMap = ({ userLocation, driverLocation }) => {
  const apiKey =
    import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey || "",
  });

  const center = useMemo(() => {
    // center between two points (simple average)
    return {
      lat: (userLocation.lat + driverLocation.lat) / 2,
      lng: (userLocation.lng + driverLocation.lng) / 2,
    };
  }, [userLocation, driverLocation]);

  const path = useMemo(() => [driverLocation, userLocation], [driverLocation, userLocation]);

  if (!apiKey) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-extrabold text-slate-900">Map</p>
        <p className="mt-2 text-sm text-slate-600">
          Add your Google Maps API key to show the map.
        </p>
        <div className="mt-4 rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold text-slate-600">Vite</p>
          <p className="mt-1 text-xs text-slate-600">
            <span className="font-mono">VITE_GOOGLE_MAPS_API_KEY=YOUR_KEY</span>
          </p>
          <p className="mt-3 text-xs font-semibold text-slate-600">CRA</p>
          <p className="mt-1 text-xs text-slate-600">
            <span className="font-mono">REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_KEY</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-extrabold text-slate-900">Live Map</p>
          <p className="mt-1 text-xs text-slate-500">
            Driver location → your destination.
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          Google Maps
        </span>
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
            options={{
              disableDefaultUI: true,
              zoomControl: true,
              fullscreenControl: false,
            }}
          >
            <Marker position={driverLocation} label="D" />
            <Marker position={userLocation} label="U" />
            <Polyline
              path={path}
              options={{
                strokeOpacity: 0.9,
                strokeWeight: 4,
              }}
            />
          </GoogleMap>
        ) : (
          <div className="flex h-[520px] items-center justify-center bg-slate-50">
            <p className="text-sm font-semibold text-slate-600">Loading map…</p>
          </div>
        )}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold text-slate-600">Driver</p>
          <p className="mt-1 text-sm font-semibold text-slate-900">
            {driverLocation.lat.toFixed(5)}, {driverLocation.lng.toFixed(5)}
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-xs font-semibold text-slate-600">You</p>
          <p className="mt-1 text-sm font-semibold text-slate-900">
            {userLocation.lat.toFixed(5)}, {userLocation.lng.toFixed(5)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryMap;
