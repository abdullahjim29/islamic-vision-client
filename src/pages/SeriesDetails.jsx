import { useContext } from "react";
import { useLoaderData, useNavigate} from "react-router-dom";
import { SeriesContext } from "../layout/SeriesContextApi";
import toast from "react-hot-toast";
import LoadingSpinner from "../components/LoadingSpinner";

const SeriesDetails = () => {
  const loadedSeries = useLoaderData();
  const {series, setSeries,} = useContext(SeriesContext);
  const { _id, postar, title, genre, duration, release, ratings, summary } =
    loadedSeries;

  const navigate = useNavigate();

  if(!loadedSeries){
    return <LoadingSpinner/>
  }

    const handleDelete = id => {
       fetch(`http://localhost:5000/series/${id}`, {
        method: "DELETE",
       })
       .then(res => res.json())
       .then(data => {
        toast.success('The Series Succsessfully Deleted!')
        const remainingSeries = [...series].filter(series => series._id !== id)
        setSeries(remainingSeries)
        navigate('/all-series')
       })
    }

    const handleFavorite = id => {
      fetch(`http://localhost:5000/favorite/${id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(loadedSeries)
      })
      .then(res => res.json())
      .then(data => {
        toast.success('The Series Added to Favorite List Succsessfully!')
      })
    }
  return (
    <div className="bg-base-200 p-14 min-h-screen mb-16 flex gap-10">
      <div className="w-10/12">
        <img className="rounded-2xl" src={postar} alt={title} />
      </div>

      <div className="space-y-3 w-10/12">
        <h2 className="text-4xl">{title}</h2>
        <p><span className="font-semibold text-md">Genre:</span> <span className="text-md">{genre}</span></p>
        <p><span className="font-semibold text-md">Duration: </span><span>{duration} min</span></p>
        <p><span className="font-semibold text-md">Release: </span><span>{release} Year</span></p>
        <p><span className="font-semibold text-md">Ratings: </span><span>{ratings}</span></p>
        <span className="font-semibold">Summary</span>
        <p className="">{summary}</p>
        <div className="space-x-3">
        <button onClick={() => handleDelete(_id)} className="btn bg-[#573AEE] text-white hover:bg-white hove:border hover:border-[#573AEE] hover:text-black">Delete Movie</button>
        <button onClick={() => handleFavorite(_id)} className="btn border border-[#573AEE] hover:bg-[#573AEE] hover:text-white">Add to Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default SeriesDetails;
