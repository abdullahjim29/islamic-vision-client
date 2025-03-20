import SeriesCards from "../components/SeriesCards";
import {Link} from "react-router-dom";
import Video from "../components/Video";
import { useContext } from "react";
import { SeriesContext } from "../layout/SeriesContextApi";
import LoadingSpinner from "../components/LoadingSpinner";
import ExtraSection from "../components/ExtraSection";

const Home = () => {
  const {series} = useContext(SeriesContext);
  const limitedSeries = [...series].slice(0, 6);
  return (
    <div>
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-[raleway] font-semibold">Islamic Vision Most Popular</h2>
      </div>
      <SeriesCards limitedSeries={limitedSeries} />

        {
          series.length <= 6  ? '' : <div className="ml-3">
          <Link to={'/all-series'}><button className="btn bg-[#573AEE] text-white">See All</button></Link>
        </div>
        }
      
      <Video/>
      <ExtraSection/>
    </div>
  );
};

export default Home;
