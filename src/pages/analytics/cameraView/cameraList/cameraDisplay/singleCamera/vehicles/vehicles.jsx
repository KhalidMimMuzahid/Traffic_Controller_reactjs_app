import { useSelector } from "react-redux";
import Vehicle from "./vehicle/vehicle";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Vehicles = () => {
  const vehicles = [
    {
      _id: "55555v56b4b545c",
      category: "Car",
      intersection: "Aamtoli",
      roadNo: 1,
      roadName: "Mirpur-1",
      directionType: "entry", // "exit"
      violationStatus: {
        lenViolation: false,
        speedViolation: false,
      },
      speed: 56,
      // photo:
      //   "https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fHww",

      photo: "https://i.postimg.cc/MG3vqK5V/temp-Image0-NBDw-Y.avif",

      numberPlatePhoto:
        "https://media.istockphoto.com/id/488650296/photo/minnesota-licence-plate-with-fake-number.jpg?s=2048x2048&w=is&k=20&c=VPhPaSjTJYP92rILsvzBrcRTd5ppPhYUxTdO6a-VEwQ=",
      licenseNumber: "Dhaka La- 5434",
    },
    {
      _id: "55555hfghty545c",
      category: "Car",
      intersection: "Aamtoli",
      roadNo: 1,
      roadName: "Mirpur-1",
      directionType: "entry", // "exit"
      violationStatus: {
        lenViolation: true,
        speedViolation: true,
      },
      speed: 56,
      photo: "https://i.postimg.cc/JnytnVYg/temp-Image0pznzr.avif",
      numberPlatePhoto:
        "https://media.istockphoto.com/id/488650296/photo/minnesota-licence-plate-with-fake-number.jpg?s=2048x2048&w=is&k=20&c=VPhPaSjTJYP92rILsvzBrcRTd5ppPhYUxTdO6a-VEwQ=",
      licenseNumber: "Dhaka La- 5434",
    },
    {
      _id: "555fg45rr6b4b545c",
      category: "Car",
      intersection: "Aamtoli",
      roadNo: 1,
      roadName: "Mirpur-1",
      directionType: "entry", // "exit"
      violationStatus: {
        lenViolation: true,
        speedViolation: true,
      },
      speed: 56,
      photo: "https://i.postimg.cc/CxNRr4fv/temp-Image3-SQmxs.avif",
      numberPlatePhoto:
        "https://media.istockphoto.com/id/488650296/photo/minnesota-licence-plate-with-fake-number.jpg?s=2048x2048&w=is&k=20&c=VPhPaSjTJYP92rILsvzBrcRTd5ppPhYUxTdO6a-VEwQ=",
      licenseNumber: "Dhaka La- 5434",
    },
    {
      _id: "55g45vrrb545c",
      category: "Car",
      intersection: "Aamtoli",
      roadNo: 1,
      roadName: "Mirpur-1",
      directionType: "entry", // "exit"
      violationStatus: {
        lenViolation: true,
        speedViolation: true,
      },
      speed: 56,
      photo: "https://i.postimg.cc/Df94S0Tc/temp-Image7kg4-P1.avif",
      numberPlatePhoto:
        "https://media.istockphoto.com/id/488650296/photo/minnesota-licence-plate-with-fake-number.jpg?s=2048x2048&w=is&k=20&c=VPhPaSjTJYP92rILsvzBrcRTd5ppPhYUxTdO6a-VEwQ=",
      licenseNumber: "Dhaka La- 5434",
    },
    {
      _id: "55fgb6r564b545c",
      category: "Car",
      intersection: "Aamtoli",
      roadNo: 1,
      roadName: "Mirpur-1",
      directionType: "entry", // "exit"
      violationStatus: {
        lenViolation: true,
        speedViolation: true,
      },
      speed: 56,
      photo: "https://i.postimg.cc/bN1DkPYf/temp-Image9-S5f-FS.avif",
      numberPlatePhoto:
        "https://media.istockphoto.com/id/488650296/photo/minnesota-licence-plate-with-fake-number.jpg?s=2048x2048&w=is&k=20&c=VPhPaSjTJYP92rILsvzBrcRTd5ppPhYUxTdO6a-VEwQ=",
      licenseNumber: "Dhaka La- 5434",
    },
    {
      _id: "55ffdv5dfb4b545c",
      category: "Car",
      intersection: "Aamtoli",
      roadNo: 1,
      roadName: "Mirpur-1",
      directionType: "entry", // "exit"
      violationStatus: {
        lenViolation: true,
        speedViolation: true,
      },
      speed: 56,
      photo: "https://i.postimg.cc/hjHvQyHG/temp-Image-Nsrjlg.avif",
      numberPlatePhoto:
        "https://media.istockphoto.com/id/488650296/photo/minnesota-licence-plate-with-fake-number.jpg?s=2048x2048&w=is&k=20&c=VPhPaSjTJYP92rILsvzBrcRTd5ppPhYUxTdO6a-VEwQ=",
      licenseNumber: "Dhaka La- 5434",
    },
  ];

  const socket = useSelector((state) => state.socket.socket);

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (event) => {
      const socketData = JSON.parse(event.data);

      console.log(socketData?.data?.data);
      toast.success(socketData?.data?.message);
      // if (socketData.event === "emit001") {
      //     console.log({socketData?.data})
      // }
    };

    // return () => {
    //   socket.off("newMessage");
    // };
  }, [socket]);

  // socket.onmessage = (event) => {
  //   const messageData = JSON.parse(event.data);
  //   if (messageData.event === "emit001") {
  //       setMessages(prevMessages => [...prevMessages, `📢 ${messageData.data}`]);
  //   }

  return (
    <div className="col-span-2">
      <div className="grid grid-cols-2 gap-2">
        {vehicles?.map((vehicle) => (
          <Vehicle key={vehicle?._id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default Vehicles;

{
  /* <div className="container mx-auto px-4 py-6 border-4 border-white">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {vehicles.map((vehicle) => (
    <Vehicle key={vehicle._id} vehicle={vehicle} />
  ))}
</div>
</div> */
}
