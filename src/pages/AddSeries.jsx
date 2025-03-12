const AddSeries = () => {
    const handleAddSeries = e => {
        e.preventDefault();

        const postar = e.target.postar.value;
        const title = e.target.title.value;
        const genre = e.target.genre.value;
        const duration = e.target.duration.value;
        const release = e.target.release.value;
        const ratings = e.target.ratings.value;
        const summary = e.target.summary.value;

        const newSeries = {postar, title, genre, duration, release, ratings, summary}

        // adding new series
        fetch('http://localhost:5000/series', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSeries)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            e.target.reset();
        })
    }
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

        <form onSubmit={handleAddSeries}>
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
                name="title"
                type="text"
                placeholder="Title"
                className="input w-full"
              />
            </div>
            <div>
              <label>Genre</label>
              <select className="input w-full" name="genre" id="">
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
              <select className="input w-full" name="release" id="">
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
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
              name="summary"
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
