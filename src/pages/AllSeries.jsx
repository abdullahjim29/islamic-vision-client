import { useContext, useEffect, useState } from "react";
import SeriesCard from "../components/SeriesCard";
import { SeriesContext } from "../layout/SeriesContextApi";
import { useLoaderData } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const AllSeries = () => {
  const loadedSeries = useLoaderData();
  const { series, setSeries } = useContext(SeriesContext);
  useEffect(() => {
    setSeries(loadedSeries);
  }, [])
  const [search, setSearch] = useState('');

  if (!series) {
    return <LoadingSpinner />;
  }

  useEffect(() => {
    fetch(`https://islamic-vision-server.vercel.app/series?searchParams=${search}`)
    .then(res => res.json())
    .then(data => {
      setSeries(data)
    })
  }, [search])
  
  return (
    <div className="mb-20 mt-10">
      <h2 className="text-4xl font-semibold text-center">Explore All Series</h2>
      <div className="flex justify-center my-5">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input onChange={(e) => setSearch(e.target.value)} type="search" className="grow" placeholder="Search Series" />
        </label>
      </div>
      {series.length <= 0 ? (
        <div>
          <h3 className="text-red-700 text-5xl text-center my-10">
            NO DATA FOUND
          </h3>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
          {series.map((singleSeries) => (
            <SeriesCard key={singleSeries._id} series={singleSeries} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllSeries;
