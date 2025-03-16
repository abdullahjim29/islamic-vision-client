import { useLoaderData } from "react-router-dom";
import FavoriteCard from "../components/FavoriteCard";
import { useState } from "react";

const FavoriteSeries = () => {
    const loadedFavorite = useLoaderData();
    const [favorite, setFavorite] = useState(loadedFavorite);

    return (
        <div className="mb-20">
            <h2 className="text-4xl font-semibold text-center mb-10">All Favorite</h2>
            {
                favorite.length <= 0 ? <div><h2 className="text-red-500 text-4xl text-center font-semibold">There is no favorite Series</h2></div> : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-5 gap-y-10">
                {
                    favorite.map(favoriteSeries => <FavoriteCard key={favoriteSeries._id} favoriteSeries={favoriteSeries} favorite={favorite} setFavorite={setFavorite}/>)
                }
            </div>
            }
        </div>
    );
};

export default FavoriteSeries;