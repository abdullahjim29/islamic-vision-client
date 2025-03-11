const AddSeries = () => {
  return (
    <div className="font-[raleway]">
      <div className="p-20 space-y-5 my-5">
        <h2 className="text-4xl text-center">Add New Series</h2>
        <p className="text-sm w-10/12 mx-auto leading-6 text-center">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <form>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              Series Poster
              <input
                name="postar"
                type="url"
                placeholder="Postar"
                className="input w-full"
              />
            </div>
            <div>
              Series Title
              <input
                name="chef"
                type="text"
                placeholder="Title"
                className="input w-full"
              />
            </div>
            <div>
              <label>Genre</label>
              <select className="input w-full" name="" id="">
                <option value="osmani khelafot">Osmani Khelafot</option>
                <option value="seljuk khelafot">Seljuk Khelafot</option>
                <option value="ayyubi">Ayyubi</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div>
              Duration
              <input
                name="duration"
                type="number"
                placeholder="Duration"
                className="input w-full"
              />
            </div>
            <div>
              <label>Release Year</label>
              <select className="input w-full" name="" id="">
                <option value="osmani khelafot">2020</option>
                <option value="seljuk khelafot">2021</option>
                <option value="ayyubi">2022</option>
                <option value="others">2023</option>
                <option value="others">2024</option>
              </select>
            </div>
            <div>
              Rating
              <input
                name="ratings"
                type="text"
                placeholder="Ratings"
                className="input w-full"
              />
            </div>
          </div>

          <div className="mt-4">
            <label>Summary</label>
            <textarea
              className="border border-gray-500 rounded-md w-full my-5"
              name=""
              id=""
              cols={10}
              rows={7}
            ></textarea>
          </div>
          <button className="btn btn-block bg-green-500 font-semibold text-lg text-black">
            Add Series
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSeries;
