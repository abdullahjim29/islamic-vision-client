import { useContext } from "react";
import { AuthContext } from "../layout/AuthProvider";
import { Navigate, useLocation} from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <LoadingSpinner/>
      }

    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to='/login'/>
    );
};

export default PrivateRoute;