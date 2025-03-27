import { useSelector } from "react-redux";
import Vehicle from "./vehicle/vehicle";
import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
import { useGetVehiclesQuery } from "../../../../../../../app/services/vehicleApi/vehicleApi";

// eslint-disable-next-line react/prop-types
const Vehicles = ({ setRefreshAnalyzingData }) => {
  const [metaData, setMetaData] = useState({ current: 1 });
  // const [search, setSearch] = useState("");
  const {
    data: vehicleData,
    // error: getUserError,
    // isError,
    isLoading,
    isSuccess,
    refetch,
  } = useGetVehiclesQuery({
    page: metaData?.current,
    // name: search,
  });
  useEffect(() => {
    if (isSuccess) {
      setMetaData(vehicleData?.meta_data);
    }
  }, [isSuccess, vehicleData?.meta_data, isLoading]);

  // const vehicles = [
  //   {
  //     id: 1,
  //     category: "string",
  //     direction: "string23232",
  //     len_violation: true,
  //     speed_violation: true,
  //     speed: 0,
  //     tracker_id: 0,
  //     license_number: "string2332",
  //     photo:
  //       "http://127.0.0.1:8000/api/v1/files/get?id=755bc8d2-40d3-4afd-b16e-7c7d93e9f4c9",
  //     license_photo:
  //       "http://127.0.0.1:8000/api/v1/files/get?id=7e918bca-377e-4711-8317-9789daec646c",
  //     camera: {
  //       id: 1,
  //       name: "string",
  //       direction_type: "exit",
  //     },
  //     road: {
  //       id: 1,
  //       name: "string",
  //     },
  //     intersection: {
  //       id: 1,
  //       name: "string",
  //     },
  //     zone: {
  //       id: 1,
  //       name: "string",
  //     },
  //     created_at: "2025-03-19T09:34:51.378822Z",
  //   },
  // ];

  const socket = useSelector((state) => state.socket.socket);

  useEffect(() => {
    if (!socket) return;

    socket.onmessage = (event) => {
      const socketData = JSON.parse(event.data);

      console.log(socketData);
      if (socketData.event === "new-vehicle-added") {
        refetch();
        setRefreshAnalyzingData((prev) => !prev);
        // console.log(socketData?.data?.data);
        // toast.success(socketData?.data?.message);
      }
    };

    // return () => {
    //   socket.off("newMessage");
    // };
  }, [socket, refetch]);

  return (
    <div className="col-span-2">
      <div className="grid grid-cols-2 gap-2">
        {vehicleData?.data?.map((vehicle) => (
          <Vehicle key={vehicle?.id} vehicle={vehicle} />
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
