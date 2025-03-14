import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const SeriesContext = createContext(null);

const SeriesContextApi = ({children}) => {

    const [series, setSeries] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/series')
        .then(res => res.json())
        .then(data => setSeries(data))
    }, [])

    const seriesState = {
        series,
        setSeries
    }
    return (
        <SeriesContext.Provider value={seriesState}>
            {children}
        </SeriesContext.Provider>
    );
};

export default SeriesContextApi;