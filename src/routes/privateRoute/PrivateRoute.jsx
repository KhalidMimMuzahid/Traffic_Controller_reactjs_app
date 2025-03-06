/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useCheckLoggedInStatusQuery } from "../../app/services/userApi/userApi";
import { useEffect } from "react";
import { logout, setUser } from "../../app/features/auth/authSlice";

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const { data, isLoading, isSuccess, error } = useCheckLoggedInStatusQuery();
  // { skip: true }
  useEffect(() => {
    if (!isLoading && !user) {
      if (isSuccess && data?.is_success) {
        dispatch(setUser(data?.data));
      } else {
        console.log("error", error);
        dispatch(logout());
      }
    }
    console.log({ data });
    console.log({ user });
  }, [isLoading, isSuccess, data, dispatch]);

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
