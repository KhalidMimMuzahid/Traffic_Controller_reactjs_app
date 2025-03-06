import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
// import { useCheckLoggedInStatusQuery } from "../../app/services/userApi/userApi";
// import { useDispatch, useSelector } from "react-redux";
// import { logout, setUser } from "../../app/features/auth/authSlice";

const Main = () => {
  const [open, setOpen] = useState(false);

  // const user = useSelector((state) => state.auth.user);
  // const dispatch = useDispatch();
  // const { data, isLoading, isSuccess, error } = useCheckLoggedInStatusQuery();
  // // { skip: true }
  // useEffect(() => {
  //   if (!isLoading && !user) {
  //     if (isSuccess && data?.is_success) {
  //       dispatch(setUser(data?.data));
  //     } else {
  //       console.log("error", error);
  //       dispatch(logout());
  //     }
  //   }
  //   console.log({ data });
  //   console.log({ user });
  // }, [isLoading, isSuccess, data, dispatch]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (event.clientX <= 20) {
        // Call the function when the mouse is near the left edge (20px)
        setOpen(true);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <div className="min-h-screen bg-primary  ">
      <div className=" p-4 gap-4">
        <Sidebar open={open} setOpen={setOpen} />
        <div className="min-h-screen">
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Main;
