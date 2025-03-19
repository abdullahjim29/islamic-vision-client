import SeriesCards from "../components/SeriesCards";
import {Link} from "react-router-dom";
import Video from "../components/Video";
import { useContext } from "react";
import { SeriesContext } from "../layout/SeriesContextApi";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const {series} = useContext(SeriesContext);
  const limitedSeries = [...series].slice(0, 6);
  return (
    <div>
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-[raleway] font-semibold">Islamic Vision Most Popular</h2>
      </div>
      <SeriesCards limitedSeries={limitedSeries} />
      <div className="flex items-center gap-2 hover:text-[#573AEE] text-xl">
        {
          series.length <= 6  ? '' : <div className="flex items-center gap-2">
          <Link to={'/all-series'}><button className="btn bg-[#573AEE] text-white">See All</button></Link>
        </div>
        }
      </div>
      <Video/>
    </div>
  );
};

export default Home;
