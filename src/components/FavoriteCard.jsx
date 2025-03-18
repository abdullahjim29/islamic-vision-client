import { CiStar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { MdMovie } from "react-icons/md";

const FavoriteCard = ({ favoriteSeries, favorite, setFavorite }) => {
  const { _id, postar, title, genre, duration, release, ratings, summary } =
    favoriteSeries;

    console.log(favoriteSeries);

  const handleDeleteFavorite = (id) => {
    fetch(`http://localhost:5000/favorite/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaingFavorte = [...favorite].filter(fav => fav._id !== id);
        setFavorite(remaingFavorte);
      });
  };
  return (
    <div>
      <div className="card bg-base-100 border border-gray-200 p-4">
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
              <CiStar className="text-2xl text-[#573AEE]" />
              <span>{ratings}</span>
            </div>
          </div>
        </div>

        <button onClick={() => handleDeleteFavorite(_id)} className="font-bold cursor-pointer btn bg-[#573AEE] text-white my-3 w-3/6">
          Delete Favorite
        </button>
      </div>
    </div>
  );
};

export default FavoriteCard;
