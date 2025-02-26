import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";

const Main = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      console.log({ clientX: event.clientX });
      if (event.clientX <= 20) {
        // Call the function when the mouse is near the left edge (20px)
        // console.log({ clientX: event.clientX });
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
