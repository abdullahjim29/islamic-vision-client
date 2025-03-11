import SimpleImageSlider from "react-simple-image-slider";
const BannerImageSlider = () => {
  const images = [
    { url: "https://i.ibb.co/fYCzBf9j/mehmed-cover.jpg" },
    { url: "https://i.ibb.co/7tRQmTsm/uyanis-buyuk-selcuklu.jpg" },
    { url: "https://i.ibb.co/9HWVprmg/MV5-BOTg0-Mj-Yy-N2-Qt-MTM2-Zi00-OTI0-LWIy-ZGEt-ZTJk-MDNk-Mm-Mw-ZGUw-Xk-Ey-Xk-Fqc-Gc-V1-QL75-UX500-CR.jpg" },
    { url: "https://i.ibb.co/PvD23mk2/desktop-wallpaper-alparslan-alp-arslan.jpg" },
    { url: "https://i.ibb.co/LDPh6syP/645099.jpg" },
    { url: "https://i.ibb.co/GvfqDT4K/Kurulus-Osman.jpg" },
    { url: "https://i.ibb.co/cPFMXGQ/51-NJp3-POh-SL-AC-UF894-1000-QL80.jpg" },
    { url: "https://i.ibb.co/LzkYJSrs/51m-Yr-VDN4a-L-AC-UF1000-1000-QL80.jpg" },
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
