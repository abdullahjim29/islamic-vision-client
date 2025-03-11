import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <header>
                <Navbar/>
            </header>

            <main>
                <Outlet/>
            </main>

            <footer>

            </footer>
        </div>
    );
};

export default MainLayout;