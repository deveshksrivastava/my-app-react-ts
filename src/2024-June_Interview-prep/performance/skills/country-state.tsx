import React, { useEffect, useState, useMemo } from 'react';
import { countries } from '../../../valuable/data/countries';
// create json object for country state and city data

export default function CoutryStateDDl() {
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');
  // const countries=[...countries];

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    setSelectedState(''); // Reset state when country changes
  };

  const fetchstate = countries.find(country => country.country === selectedCountry);
  const fetchcity = fetchstate?.states.find(state => state.state === selectedState);

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
  };
  return (
    <div className="text-center m-4">
      <select name="country" id="country" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">--country--</option>
        {countries.map(item => (
          <option key={item.country} value={item.country}>
            {item.country}
          </option>
        ))}
      </select>

      <select name="state" id="state" value={selectedState} onChange={handleStateChange}>
        <option value="">--state--</option>
        {fetchstate?.states.map(state => (
          <option key={state.state} value={state.state}>
            {state.state}
          </option>
        ))}
      </select>

      <select name="city" id="city">
        <option value="">--city--</option>
        {fetchcity?.cities.map((city: string) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}
