import { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { SeriesContext } from "../layout/SeriesContextApi";

const UpdateSeries = () => {
    const {setSeries} = useContext(SeriesContext);
    const loadedSeries = useLoaderData();
    const { _id, postar, title, genre, duration, release, ratings, summary } = loadedSeries;
    const navigate = useNavigate();
    const handleAddSeries =e => {
        e.preventDefault();
    
        const postar = e.target.postar.value;
        const title = e.target.title.value;
        const genre = e.target.genre.value;
        const duration = e.target.duration.value;
        const release = e.target.release.value;
        const ratings = e.target.ratings.value;
        const summary = e.target.summary.value;
    
        const newSeries = {
          postar,
          title,
          genre,
          duration,
          release,
          ratings,
          summary,
        };
    
        const url = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})([\/\w .-]*)*\/?$/i;
    
        if (!url.test(postar)) {
          return toast.error("Please enter a valid URL in the Poster field.");
        }
        else if(!/^[A-Za-z\s]+$/.test(title)){
        return toast.error('Please Enter String')
        }
        else if (title.length < 2) {
          return toast.error("Please write at least two characters in the Title field.");
        } else if (duration === "" || duration < 60) {
          return toast.error(
            "Please enter a valid duration greater than 60 minutes."
          );
        }
        else if(summary.length < 10){
         return toast.error('Please write at least 10 charecters or longer')
        }
    
        // update series
        fetch(`http://localhost:5000/update-series/${_id}`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newSeries),
        })
          .then((res) => res.json())
          .then((data) => {
            setSeries(data);
            toast.success("Series Succsessfully Updated!");
            e.target.reset();
            navigate('/all-series')
          });
      };
    return (
        <div className="font-[raleway]">
      <div className="p-20 space-y-5 my-5">
        <h2 className="text-4xl text-center">Update The Series</h2>
        <p className="text-sm w-10/12 mx-auto leading-6 text-center">
        Modify and update your favorite series effortlessly with this form. Adjust the series title, genre, release year, duration, rating, and summary to keep the details accurate and up to date. Ensure your content remains relevant and well-organized with this easy-to-use interface
        </p>

        <form onSubmit={handleAddSeries}>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              Series Poster
              <input
                name="postar"
                defaultValue={postar}
                placeholder="Postar"
                className="input w-full"
                required
              />
            </div>
            <div>
              Series Title
              <input
                name="title"
                type="text"
                placeholder="Title"
                className="input w-full"
                required
                defaultValue={title}
              />
            </div>
            <div>
              <label>Genre</label>
              <select defaultValue={genre} className="input w-full" name="genre" id="">
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
                required
                defaultValue={duration}
              />
            </div>
            <div>
              <label>Release Year</label>
              <select defaultValue={release} className="input w-full" name="release" id="">
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
                required
                defaultValue={ratings}
              />
            </div>
          </div>

          <div className="mt-4">
            <label>Summary</label>
            <textarea
            defaultValue={summary}
              className="border border-gray-500 rounded-md w-full my-5"
              name="summary"
              id=""
              cols={10}
              rows={7}
            ></textarea>
          </div>
          <button className="btn btn-block bg-[#573AEE] font-semibold text-lg text-white">
            Update Series
          </button>
        </form>
      </div>
    </div>
    );
};

export default UpdateSeries;