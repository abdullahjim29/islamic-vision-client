import { PropagateLoader } from "react-spinners";
const LoadingSpinner = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
        <PropagateLoader
        size={15}
        color="#573AEE"
        loading={true}
        />
  </div>
    );
};

export default LoadingSpinner;