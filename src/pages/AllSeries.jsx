import {useLoaderData } from "react-router-dom";
import SeriesCard from "../components/SeriesCard";
const AllSeries = () => {
  const loadedSeries = useLoaderData();
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {loadedSeries.map((series) => (
        <SeriesCard key={series._id} series={series} />
      ))}
    </div>
  );
};

export default AllSeries;
