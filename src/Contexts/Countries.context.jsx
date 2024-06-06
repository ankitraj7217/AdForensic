import React, { createContext, useContext, useState } from "react";

const CountriesContext = createContext({});


// dat -> Advertisers, Impressions, Countries
const CountriesContextProvider = ({ children }) => {
    const [countriesData, setCountriesData] = useState([]);

    return (
        <CountriesContext.Provider value={{ countriesData, setCountriesData }}>
            {children}
        </CountriesContext.Provider>
    )
}

export default CountriesContextProvider;

export const useCountriesContext = () => useContext(CountriesContext);