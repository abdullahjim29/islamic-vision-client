import { useContext } from "react";
import SeriesCard from "../components/SeriesCard";
import { SeriesContext } from "../layout/SeriesContextApi";
import { useLoaderData } from "react-router-dom";

const AllSeries = () => {
  const loadedSeries = useLoaderData();
  const {series, setSeries} = useContext(SeriesContext);
  setSeries(loadedSeries)
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
      {series.map((singleSeries) => (
        <SeriesCard key={singleSeries._id} series={singleSeries} />
      ))}
    </div>
  );
};

export default AllSeries;