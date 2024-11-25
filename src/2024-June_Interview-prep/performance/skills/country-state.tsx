import React, { useEffect, useState, useMemo } from 'react';
import { countries } from '../../../valuable/data/countries';
import { Button, buttonVariants } from "../../../components/ui/button";
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
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
      <Tabs defaultValue="account" className="w-full">
        <TabsList>
          <TabsTrigger value="shadcn">ShadCN</TabsTrigger>
          <TabsTrigger value="ddl">DDL Country State</TabsTrigger>
        </TabsList>
        <TabsContent value="shadcn">
          <Button variant="destructive">Button</Button>
          <Link to='/' className={buttonVariants({ variant: "outline" })}>Click here</Link>
        </TabsContent>
        <TabsContent value="ddl">
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
        </TabsContent>
      </Tabs>


    </div>
  );
}
