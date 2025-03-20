import { Link } from "react-router-dom";

const Video = () => {
  return (
    <div className="my-20">
      <h2 className="text-5xl my-6">Trailer</h2>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full">
          <div className="flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/BUgZcKkUaCM?autoplay=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div
          id="video-content"
          className="p-10 w-11/12 bg-cover bg-center space-y-5"
        >
          <h2 className="text-4xl font-bold font-[raleway]">
            Mehmed Fetihler Sultanı
          </h2>
          <p className="text-xl font-[raleway]">
            2024 | Telivision Drama Series, Entertainment
          </p>
          <p className="font-[raleway]">
            Mehmed the Conqueror" (Fatih Sultan Mehmed) is a historical drama
            that focuses on the life of Fatih Sultan Mehmed, one of the most
            magnificent rulers of the Ottoman Empire. The series depicts his
            struggle to conquer Istanbul and defeat his enemies.
          </p>
          <Link
            target="_blank"
            to={"https://www.youtube.com/@mehmedfetihlersultani"}
          >
            <button className="btn bg-[#573AEE] text-white uppercase font-[raleway]">
              Watch Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
