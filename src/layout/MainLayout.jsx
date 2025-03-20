import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import BannerImageSlider from "../components/BannerImageSlider";
import Footer from "./Footer";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <header className="">
        <div className={`fixed top-0 z-10 w-full ${scrolling ? "backdrop-blur-3xl shadow-lg" : "bg-transparent"}`}>
        <Navbar scrolling={scrolling} />
        </div>

        <div className="">
          <BannerImageSlider />
        </div>
      </header>

      <main className="max-w-11/12 mx-auto">
        <Outlet />
      </main>

      <Footer/>
    </div>
  );
};

export default MainLayout;
