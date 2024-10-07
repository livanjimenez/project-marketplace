'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function getGeolocation(): Promise<{ lat: string; long: string }> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const lat = latitude.toString();
        const long = longitude.toString();

        resolve({ lat, long });
      },
      (error) => {
        reject(error);
      },
    );
  });
}

async function reverseGeocode(lat: string, long: string): Promise<string> {
  const reverseGeocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${API_KEY}`;

  const response = await fetch(reverseGeocodeURL);
  const data = await response.json();

  const locality = data.results[0]?.address_components.find((component: any) =>
    component.types.includes('locality'),
  )?.long_name;

  const adminArea = data.results[0]?.address_components.find((component: any) =>
    component.types.includes('administrative_area_level_1'),
  )?.short_name;

  return `${locality}, ${adminArea}`;
}

export default function LocationButton() {
  const [postalCode, setPostalCode] = useState<string>('');
  (async () => {
    const { lat, long } = await getGeolocation();
    const postalCode = await reverseGeocode(lat, long);
    setPostalCode(postalCode);
  })();

  return (
    <>
      <div className="flex items-center">
        <MapPin size={24} className="text-blue-500" />
        <span className="text-blue-500 ml-2 font-semibold">{postalCode}</span>
      </div>
    </>
  );
}
