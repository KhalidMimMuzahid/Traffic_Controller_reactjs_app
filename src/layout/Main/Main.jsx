import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import { setSocket } from "../../app/features/socket/socketSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // Create WebSocket connection
    const socket = new WebSocket("http://127.0.0.1:8000/ws");
    // Save WebSocket instance
    if (socket) {
      dispatch(setSocket({ socket }));
    }

    socket.onopen = () => toast.success("✅ Connected to WebSocket");
    socket.onclose = () => toast.error("❌ Disconnected");

    // Cleanup on unmount
    return () => {
      socket.close();
    };
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  // web socket implement
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
