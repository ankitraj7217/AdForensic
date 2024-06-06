import React, { createContext, useContext, useState } from "react";

const AdvertiserContext = createContext({});


// dat -> Advertiser, Date, Impressions, Clicks, CTR
const AdvertiserContextProvider = ({ children }) => {
    const [advertiserData, setAdvertiserData] = useState([]);

    return (
        <AdvertiserContext.Provider value={{ advertiserData, setAdvertiserData }}>
            {children}
        </AdvertiserContext.Provider>
    )
}

export default AdvertiserContextProvider;

export const useAdvertiserContext = () => useContext(AdvertiserContext);