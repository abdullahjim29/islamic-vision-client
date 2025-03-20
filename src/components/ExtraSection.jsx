import { useEffect } from "react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ExtraSection = () => {
        useEffect(() => {
          AOS.init({
            duration: 2000,
          });
        });
  return (
    <div className="my-20 bg-base-200 py-20 px-10 ">
      <div className="flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0">
        {/* left */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <p className="border-b-2 border-[#573AEE] w-[3%]"></p>
            <p className="text-sm text-gray-500">ONLINE STREAMING</p>
          </div>
          <h3 className="text-2xl md:text-4xl font-semibold leading-12 w-full md:w-5/6">
            Live Movie & TV Shows For <span className="text-[#573AEE]">Friends & Family</span>
          </h3>
          <p className="w-full md:w-9/12 text-gray-500">
          Enjoy unlimited access to the latest movies and TV shows with your loved ones. Experience high-quality streaming, an extensive library of content, and seamless entertainment anytime, anywhere. Join thousands of happy viewers today!
          </p>
          <div className="my-5 flex items-center gap-10">
            <div>
            <h4
              className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-7xl font-bold text-white uppercase 
              [text-shadow:-2px_-2px_0_blue,2px_-2px_0_blue,-2px_2px_0_blue,2px_2px_0_blue]"
            >
              HD 4K
            </h4>
            </div>

            <div>
                <h5 className="text-5xl font-bold">20k +</h5>
                <p className="font-semibold">Active Customer</p>
            </div>
          </div>
          <Link to={'/all-series'}><button className="btn bg-[#573AEE] text-white"><MdOutlineSlowMotionVideo className="text-2xl"/>WATCH NOW</button></Link>
        </div>

        {/* right */}
        <div className="w-full">
            <img data-aos="zoom-in-up" className="w-full" src="/public/live_img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
