import { useEffect, useState } from "react";
import SeriesCards from "../components/SeriesCards";
import { IoIosArrowForward } from "react-icons/io";
import {useLoaderData } from "react-router-dom";
import Video from "../components/Video";
// import Resolution from "../components/Resolution";

const Home = () => {
  const loadedSeries = useLoaderData();
  const [series, setSeries] = useState(loadedSeries);

  useEffect(() => {
    setSeries([...series].slice(0, 6));
  }, []);

  const showAllSeries = () => {
    setSeries(loadedSeries);
  };
  
  return (
    <div>
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-[raleway] font-semibold">Islamic Vision Most Popular</h2>
      </div>
      <SeriesCards series={series} />
      <div className="flex items-center gap-2 hover:text-[#573AEE] text-xl">
        <div className="flex items-center gap-2">
          {
            series.length <= 6 ? <button className="btn bg-[#573AEE] text-white" onClick={showAllSeries}>See All <IoIosArrowForward /></button> : <button className="btn bg-[#573AEE] text-white" onClick={() => setSeries([...series].slice(0, 6))}>See Less <IoIosArrowForward /></button>
          }
          {/* <Link to={'/all-series'}><button>See All</button></Link> */}
        </div>
      </div>
      <Video/>
      {/* <Resolution/> */}
    </div>
  );
};

export default Home;
