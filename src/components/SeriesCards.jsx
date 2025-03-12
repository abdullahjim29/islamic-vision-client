import SeriesCard from "./SeriesCard";

const SeriesCards = ({ series }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-5 gap-y-20">
      {series.map((series) => (
        <SeriesCard key={series._id} series={series} />
      ))}
    </div>
  );
};

export default SeriesCards;
