import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import BannerImageSlider from "../components/BannerImageSlider";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div>
      <header className="relative min-h-screen">
        <div className={`fixed top-0 z-10 w-full`}>
          <Navbar />
        </div>

        <div className="absolute top-0">
          <BannerImageSlider />
        </div>
      </header>

      <main className="w-11/12 mx-auto">
        <Outlet />
      </main>

      <Footer/>
    </div>
  );
};

export default MainLayout;
