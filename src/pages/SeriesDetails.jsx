import { useContext } from "react";
import { useLoaderData, useNavigate} from "react-router-dom";
import { SeriesContext } from "../layout/SeriesContextApi";

const SeriesDetails = () => {
  const loadedSeries = useLoaderData();
  const {series, setSeries} = useContext(SeriesContext);
  const { _id, postar, title, genre, duration, release, ratings, summary } =
    loadedSeries;

  const navigate = useNavigate();

    const handleDelete = id => {
       fetch(`http://localhost:5000/series/${id}`, {
        method: "DELETE",
       })
       .then(res => res.json())
       .then(data => {
        console.log(data);
        setSeries(data)
        navigate('/all-series')
       })
    }

  return (
    <div className="bg-base-200 p-14 min-h-screen mb-16 flex gap-10">
      <div className="w-7/12">
        <img className="rounded-2xl" src={postar} alt={title} />
      </div>

      <div className="space-y-3">
        <h2 className="text-4xl">{title}</h2>
        <p><span className="font-semibold text-md">Genre:</span> <span className="text-md">{genre}</span></p>
        <p><span className="font-semibold text-md">Duration: </span><span>{duration} min</span></p>
        <p><span className="font-semibold text-md">Release: </span><span>{release} Year</span></p>
        <p><span className="font-semibold text-md">Ratings: </span><span>{ratings}</span></p>
        <p>{summary}</p>
        <div className="space-x-3">
        <button onClick={() => handleDelete(_id)} className="btn bg-[#573AEE] text-white hover:bg-white hove:border hover:border-[#573AEE] hover:text-black">Delete Movie</button>
        <button className="btn border border-[#573AEE] hover:bg-[#573AEE] hover:text-white">Add to Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default SeriesDetails;
