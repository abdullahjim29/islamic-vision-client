const Video = () => {
  return (
    <div className="flex my-20">
      <div className="">
        <video
          controls
          autoPlay
          muted
          loop
          src="/src/assets/Şahi, Bizans Surlarını Yerle Yeksan Etti 🔥 - Mehmed_ Fetihler Sultanı 30. Bölüm @trt1.mp4"
        ></video>
      </div>
      <div id="video-content" className="p-10 w-11/12 bg-cover bg-center space-y-5">
        <h2 className="text-4xl font-bold font-[raleway]">Mehmed Fetihler Sultanı</h2>
        <p className="text-xl font-[raleway]">2024 | Telivision Drama Series, Entertainment</p>
        <p className="font-[raleway] text-gray-800">Mehmed the Conqueror" (Fatih Sultan Mehmed) is a historical drama that focuses on the life of Fatih Sultan Mehmed, one of the most magnificent rulers of the Ottoman Empire. The series depicts his struggle to conquer Istanbul and defeat his enemies.</p>
        <button className="btn bg-[#573AEE] text-white uppercase font-[raleway]">Watch Now</button>
      </div>
    </div>
  );
};

export default Video;
