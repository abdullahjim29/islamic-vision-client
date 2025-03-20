import SimpleImageSlider from "react-simple-image-slider";
const BannerImageSlider = () => {
  const images = [
    { url: "https://i.ibb.co/fYCzBf9j/mehmed-cover.jpg" },
    { url: "https://i.ibb.co/7tRQmTsm/uyanis-buyuk-selcuklu.jpg" },
    {url: "https://i.ibb.co.com/xq16bGBT/Untitled-1.jpg"},
    { url: "https://i.ibb.co/PvD23mk2/desktop-wallpaper-alparslan-alp-arslan.jpg" },
    { url: "https://i.ibb.co/LDPh6syP/645099.jpg" },
    { url: "https://i.ibb.co/GvfqDT4K/Kurulus-Osman.jpg" },
    { url: "https://i.ibb.co.com/Gv153TSN/hq720.jpg" },
    { url: "https://i.ibb.co.com/ym6dMcFJ/30397725-30-NAMA.webp" },
    { url: "https://i.ibb.co.com/FknxJkch/Ammar-ibn-Aziz-Ahmed-Mehmet-Bozdag-ATV-Bozkir-Arslani-Celaleddin-Mendirman-Jaloliddin.jpg" },
  ];

  return (
    <>
      <div className="hidden lg:block">
        <SimpleImageSlider
          width={1350}
          height={550}
          images={images}
          showNavs={true}
          navSize={25}
          autoPlay
          autoPlayDelay={3.0}
          showBullets={false}
        />
      </div>

      <div className="hidden md:block lg:hidden">
        <SimpleImageSlider
          width={800}
          height={380}
          images={images}
          showNavs={true}
          navSize={25}
          autoPlay
          showBullets={false}
        />
      </div>
      <div className="block md:hidden">
        <SimpleImageSlider
          width={420}
          height={240}
          images={images}
          showNavs={true}
          navSize={25}
          autoPlay
          showBullets={false}
        />
      </div>
    </>
  );
};

export default BannerImageSlider;
