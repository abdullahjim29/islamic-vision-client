import { useLoaderData } from "react-router-dom";
import SeriesCard from "../components/SeriesCard";

const FavoriteSeries = () => {
    const loadedFavorite = useLoaderData();

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-5 gap-y-10 mb-20">
            {
                loadedFavorite.map(favoriteSeries => <SeriesCard key={favoriteSeries._id} series={favoriteSeries}/>)
            }
        </div>
    );
};

export default FavoriteSeries;