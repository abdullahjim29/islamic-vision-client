import { useEffect, useState } from "react";
import SeriesCards from "../components/SeriesCards";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const loadedSeries = useLoaderData();
  const [series, setSeries] = useState(loadedSeries);

  useEffect(() => {
    setSeries([...series].slice(0, 6));
  }, []);

  const showAllSeries = () => {
    setSeries(loadedSeries);
  };

  console.log(series);
  return (
    <div>
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-[raleway]">Islamic Vision Most Popular</h2>
      </div>
      <SeriesCards series={series} />
      <div className="flex items-center gap-2 hover:text-red-500 text-xl">
        <div className="flex items-center gap-2">
          {
            series.length <= 6 ? <button onClick={showAllSeries}>See All</button> : <button onClick={() => setSeries([...series].slice(0, 6))}>See Less</button>
          }
          {/* <Link to={'/all-series'}><button>See All</button></Link> */}
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default Home;
