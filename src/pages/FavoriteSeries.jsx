import { useLoaderData } from "react-router-dom";
import SeriesCard from "../components/SeriesCard";
import FavoriteCard from "../components/FavoriteCard";
import { useState } from "react";

const FavoriteSeries = () => {
    const loadedFavorite = useLoaderData();
    const [favorite, setFavorite] = useState(loadedFavorite);

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-5 gap-y-10 mb-20">
            {
                favorite.map(favoriteSeries => <FavoriteCard key={favoriteSeries._id} favoriteSeries={favoriteSeries} favorite={favorite} setFavorite={setFavorite}/>)
            }
        </div>
    );
};

export default FavoriteSeries;