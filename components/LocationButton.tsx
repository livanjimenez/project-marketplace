'use client';

import { useState } from 'react';

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

  const postalCode = data.results[0]?.address_components.find(
    (component: any) => component.types.includes('postal_code'),
  )?.long_name;

  return postalCode || 'No postal code found';
}

export default function LocationButton() {
  const [postalCode, setPostalCode] = useState<string>('');

  const handleClick = async () => {
    try {
      const { lat, long } = await getGeolocation();
      const postalCode = await reverseGeocode(lat, long);

      setPostalCode(postalCode);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <button onClick={handleClick}>Get current location: {postalCode}</button>
    </>
  );
}
