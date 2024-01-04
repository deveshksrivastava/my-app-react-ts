import React, { useState } from 'react';

const InterviewCountryState: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <h1>Country, State, and City Selection</h1>

      <label htmlFor="country">Country:</label>
      <select id="country" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select a country</option>
        {/* Add your country options here */}
      </select>

      <label htmlFor="state">State:</label>
      <select id="state" value={selectedState} onChange={handleStateChange}>
        <option value="">Select a state</option>
        {/* Add your state options here */}
      </select>

      <label htmlFor="city">City:</label>
      <select id="city" value={selectedCity} onChange={handleCityChange}>
        <option value="">Select a city</option>
        {/* Add your city options here */}
      </select>
    </div>
  );
};

export default InterviewCountryState;
