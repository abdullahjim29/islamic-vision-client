import { useContext } from "react";
import SeriesCard from "../components/SeriesCard";
import { SeriesContext } from "../layout/SeriesContextApi";
import { useLoaderData } from "react-router-dom";

const AllSeries = () => {
  const loadedSeries = useLoaderData();
  const {series, setSeries} = useContext(SeriesContext);
  setSeries(loadedSeries)
  return (
    <div className="mb-20">
      <h2 className="text-4xl font-semibold text-center">Explore All Series</h2>
      {
        series.length <= 0 ? <div><h3 className="text-red-700 text-5xl text-center my-10">NO DATA FOUND</h3></div> : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {series.map((singleSeries) => (
          <SeriesCard key={singleSeries._id} series={singleSeries} />
        ))}
      </div>
      }
    </div>
  );
};

export default AllSeries;