import { useContext } from "react";
import { AuthContext } from "../layout/AuthProvider";
import { Navigate, useLocation} from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log(location);
    const {user, setUser, loading} = useContext(AuthContext);

    if(loading){
        return <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-dots loading-xl"></span>
        </div>
    }

    if(user){
        return children
    }
    return (
        <Navigate state={location.pathname} to='/login'/>
    );
};

export default PrivateRoute;