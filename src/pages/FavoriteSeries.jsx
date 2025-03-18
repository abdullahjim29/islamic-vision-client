import { useLoaderData } from "react-router-dom";
import FavoriteCard from "../components/FavoriteCard";
import { useContext, useState } from "react";
import { AuthContext } from "../layout/AuthProvider";

const FavoriteSeries = () => {
    const {user} = useContext(AuthContext);
    const loadedFavorite = useLoaderData();
    const [favorite, setFavorite] = useState(loadedFavorite);

    const CurrentUserFavorite = [...favorite].filter(CurUserFav => CurUserFav.email === user.email);

    return (
        <div className="mb-20">
            <h2 className="text-4xl font-semibold text-center mb-10">All Favorite</h2>
            {
                CurrentUserFavorite.length <= 0 ? <div><h2 className="text-red-500 text-4xl text-center font-semibold">There is no favorite Series</h2></div> : <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-5 gap-y-10">
                {
                    CurrentUserFavorite.map(favoriteSeries => <FavoriteCard key={favoriteSeries._id} favoriteSeries={favoriteSeries} favorite={favorite} setFavorite={setFavorite}/>)
                }
            </div>
            }
        </div>
    );
};

export default FavoriteSeries;