import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Home from "../pages/Home";
import AllSeries from "../pages/AllSeries";
import AddSeries from "../pages/AddSeries";
import FavoriteSeries from "../pages/FavoriteSeries";
import Discover from "../pages/Discover";
import SeriesDetails from "../pages/SeriesDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <h2>404</h2>,
        children: [
            {
                path: '/',
                element: <Home/>,
                // loader: () => fetch('http://localhost:5000/series')
            },
            {
                path: '/all-series',
                element: <AllSeries/>,
                loader: () => fetch('http://localhost:5000/series')
            },
            {
                path: '/add-series',
                element: <AddSeries/>
            },
            {
                path: '/favorite-series',
                element: <FavoriteSeries/>
            },
            {
                path: '/discover',
                element: <Discover/>
            },
            {
                path: '/series/:id',
                element: <SeriesDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/series/${params.id}`)
            }
        ]
    }
])

export default router;