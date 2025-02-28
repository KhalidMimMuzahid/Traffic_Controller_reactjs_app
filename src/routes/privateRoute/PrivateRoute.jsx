/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  if (auth?.isLoading) {
    return (
      <div>
        <h1>is loading</h1>
      </div>
    );
  }
  if (!auth?.user) {
    return (
      <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    );
  } else {
    return children;
  }
};

export default PrivetRoute;
