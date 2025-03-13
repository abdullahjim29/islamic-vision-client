import { IoMdTime } from "react-icons/io";
import { MdMovie } from "react-icons/md";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";


const SeriesCard = ({ series }) => {
  const { _id, postar, title, genre, duration, release, ratings, summary } =
    series;
  return (
    <div>
      <div className="card bg-base-100">
        <figure>
          <img className="h-[224px] w-full" src={postar} alt={title} />
        </figure>
        <div className="flex justify-between items-center my-5">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-[#573AEE] font-bold">{release}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="flex items-center gap-2">
            <MdMovie className="text-[#573AEE] text-xl" />
            {genre}
          </p>
          <div className="flex items-center gap-4">
          <p className="flex items-center gap-3">
            <IoMdTime className="text-[#573AEE] text-xl" />
            {duration} min
          </p>
          <div className="flex items-center gap-2">
          <CiStar className="text-2xl text-[#573AEE]"/>
          <span>{ratings}</span>
        </div>
          </div>
        </div>

        <div className="mt-5">
          <Link to={`/series/${_id}`}>
            <button className="font-bold cursor-pointer">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeriesCard;
