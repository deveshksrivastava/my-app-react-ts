import React, { useState } from 'react'
import { countries } from './valuable/data/countries'
// create json object for country state and city data

export default function App() {
    const [countryList, setCountryList] = useState(countries)
    const [selectedCountry, setSelectedCountry] = useState('')
    const [selectedState, setSelectedState] = useState('')
    const [selectedCity, setselectedCity] = useState('')

    const handleCountryChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const newArr = countryList.filter(
            (item) => item.country === event.target.value
        )
        setCountryList(newArr)
    }

    // how to add two number

    const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log('state :', event.target.value)
        const newArr = countryList.filter((item) => {
            item.states.filter((item) => item.state === event.target.value)
        })
        console.log('state :', newArr)
        setCountryList(newArr)
        // setSelectedState(event.target.value)
    }
    return (
        <div>
            <select
                name="country"
                id="country"
                value={selectedCountry}
                onChange={handleCountryChange}
            >
                <option value="India">--country--</option>
                {countryList.map((item) => {
                    return <option value={item.country}>{item.country}</option>
                })}
            </select>
            <select
                name="state"
                id="state"
                value={selectedState}
                onChange={handleStateChange}
            >
                <option value="India">--state--</option>
                {countryList.map((item) => {
                    return (
                        <>
                            {item.states.map((state) => {
                                return (
                                    <option value={state.state}>
                                        {state.state}
                                    </option>
                                )
                            })}
                        </>
                    )
                })}
            </select>
            <select name="city" id="city">
                <option value="India">--city--</option>
                {countryList.map((item) => {
                    return (
                        <>
                            {item.states.map((state) => {
                                return (
                                    <>
                                        {state.cities.map((city) => {
                                            return (
                                                <option value="city">
                                                    {city}
                                                </option>
                                            )
                                        })}
                                    </>
                                )
                            })}
                        </>
                    )
                })}
            </select>
            {JSON.stringify(countries)}
        </div>
    )
}

// create page of country, state, city
