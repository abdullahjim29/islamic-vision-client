const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      price: "$7.99",
      period: "Monthly",
      videoQuality: "Good",
      resolution: "480p",
      screens: 1,
      cancelAnytime: true,
      category: "Basic",
    },
    {
      id: 2,
      price: "$9.99",
      period: "Monthly",
      videoQuality: "Better",
      resolution: "1080p",
      screens: 2,
      cancelAnytime: true,
      category: "standard",
    },
    {
      id: 3,
      price: "$11.99",
      period: "Monthly",
      videoQuality: "Best",
      resolution: "4K+HDR",
      screens: 4,
      cancelAnytime: true,
      category: "premium",
    },
  ];

  return (
    <div className="mt-10">
      <div className="text-center space-y-3 mb-16">
        <p>our pricing plans</p>
        <h2 className="text-3xl md:text-5xl font-semibold">Our Pricing Strategy</h2>
        <p className="border-b-2 border-[#573AEE] w-[10%] mx-auto"></p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {pricingPlans.map((price) => (
          <div
            className="border-2 border-[#573AEE] p-10 rounded-md"
            key={price.id}
          >
            <p className="text-center mb-5 font-semibold">{price.category}</p>
            <div className="bg-[#573AEE] py-4 text-white w-6/12 mx-auto text-center rounded-md mb-10">
              <p className="text-2xl font-bold">{price.price}</p>
              <p>{price.period}</p>
            </div>

            <div className="my-4 space-y-5">
              <div className="flex items-center justify-between m-2">
                <p>Video quality</p>
                <p className="text-[#573AEE] font-semibold">
                  {price.videoQuality}
                </p>
              </div>
              <hr className="text-gray-400" />
              <div className="flex items-center justify-between m-2">
                <p>Resolutio</p>
                <p>{price.resolution}</p>
              </div>
              <hr className="text-gray-400" />
              <div className="flex items-center justify-between m-2">
                <p>Screens you can watch</p>
                <p>{price.screens}</p>
              </div>
              <hr className="text-gray-400" />
              <div className="flex items-center justify-between m-2">
                <p>Cancel anytime</p>
                <p>{price.cancelAnytime}</p>
              </div>
              <hr className="text-gray-400" />
            </div>

            <div className="text-center mt-10">
              <button className="btn border border-[#573AEE] rounded-full px-10 py-6 hover:bg-[#573AEE] hover:text-white">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* trial */}
      <div className="my-20 bg-gradient-to-r from-[#5a10e225] to-[#573AEE] p-16 flex flex-col md:flex-row justify-between items-center space-y-4">
        <div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">Trial Start First 30 Days.</h3>
          <p>Enter your email to create or restart your membership.</p>
        </div>

        <div className="w-full md:w-6/12">
        <fieldset >
          <div className="join w-full relative">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="input input-bordered join-item w-full py-6"
            />
            <button className="btn btn-primary join-item py-4 absolute right-1 top-1 ">Subscribe</button>
          </div>
        </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
