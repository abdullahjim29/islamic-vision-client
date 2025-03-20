import { useContext } from "react";
import { Link, useLoaderData, useNavigate} from "react-router-dom";
import { SeriesContext } from "../layout/SeriesContextApi";
import toast from "react-hot-toast";
import LoadingSpinner from "../components/LoadingSpinner";
import { AuthContext } from "../layout/AuthProvider";

const SeriesDetails = () => {
  const loadedSeries = useLoaderData();
  const {user} = useContext(AuthContext);
  const {email} = user;
  const {series, setSeries,} = useContext(SeriesContext);
  const { _id, postar, title, genre, duration, release, ratings, summary } =
    loadedSeries;

    const favoriteInfo ={
      postar: loadedSeries?.postar,
      title: loadedSeries?.title,
      genre: loadedSeries?.genre,
      duration: loadedSeries?.duration,
      release: loadedSeries?.release,
      ratings: loadedSeries?.ratings,
      summary: loadedSeries?.summary,
      email,
    }

  const navigate = useNavigate();

  if(!loadedSeries){
    return <LoadingSpinner/>
  }

    const handleDelete = id => {
       fetch(`https://islamic-vision-server.vercel.app/series/${id}`, {
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


    const handleFavorite = () => {
      fetch('https://islamic-vision-server.vercel.app/favorite', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(favoriteInfo)
      })
      .then(res => res.json())
      .then(data => {
        toast.success('The Series Added to Favorite List Succsessfully!')
      })
    }
  return (
    <div className="bg-base-200 p-14 min-h-screen mb-16 flex flex-col md:flex-row gap-10 my-10">
      <div className="w-full md:w-10/12">
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
        <div className="space-x-3 space-y-5 md:space-y-0">
        <button onClick={() => handleDelete(_id)} className="btn border border-[#573AEE] hover:bg-[#573AEE] hover:text-white md:mb-2 lg:mb-0">Delete Movie</button>
        <button onClick={handleFavorite} className="btn border border-[#573AEE] hover:bg-[#573AEE] hover:text-white">Add to Favorite</button>
        <button className="btn border border-[#573AEE] hover:bg-[#573AEE] hover:text-white"><Link to={`/update-series/${_id}`}>Update Series</Link></button>
        </div>
        
      </div>
    </div>
  );
};

export default SeriesDetails;
