/* eslint-disable react/prop-types */
import { useState } from "react";

// const x = {
//   id: 1,
//   Xcategory: "string",
//   direction: "entry",
//   Xphoto:
//     "http://127.0.0.1:8000/api/v1/files/get?id=3c9b630d-eab4-4898-9435-a17021f66a35",
//   Xlicense_photo:
//     "http://127.0.0.1:8000/api/v1/files/get?id=97d94213-92b8-4b12-b23c-e55b88249392",
//   Xlicense_number: "string",
//   speed: 0,
//   speed_violation: false,
//   len_violation: true,

//   tracker_id: 0,

//   camera: {
//     id: 1,
//     name: "string",
//     Xdirection_type: "exit",
//   },
//   road: {
//     id: 1,
//     Xname: "string",
//   },
//   intersection: {
//     id: 1,
//     Xname: "string",
//   },
//   zone: {
//     id: 1,
//     name: "string",
//   },

//   Xcreated_at: "2025-03-14T08:52:00.088164+00:00",
// };

const Vehicle = ({ vehicle }) => {
  const [showLicensePopup, setShowLicensePopup] = useState(false);
  return (
    <div className="relative bg-primary text-white rounded-xl shadow-lg overflow-hidden">
      <div className="flex justify-center h-[150px] p-2">
        <img
          src={vehicle.photo}
          alt="Vehicle"
          className="max-w-full max-h-40 w-auto  object-cover "
        />
      </div>

      <div className="px-3 py-1">
        {/* <p className="text-sm text-neutral-400">
          <span className="font-semibold">Intersection:</span>{" "}
          {vehicle.intersection?.name}
        </p> */}
        <p className="text-sm text-neutral-400">
          Zone: {vehicle.zone?.name} <br />
          Intersection: {vehicle.intersection?.name} <br />
          Road: {vehicle.road?.name} <br />
          Camera: {vehicle.camera?.name}
        </p>
        <h1 className="text-sm font-bold text-neutral">
          Type: {vehicle.category}
        </h1>

        <div className="flex gap-2">
          {/* <p
            className={`mt-2 px-3 py-1 inline-block rounded-lg text-xs font-semibold ${
              vehicle?.camera?.direction_type === "entry"
                ? "bg-green-600"
                : "bg-red-600"
            }`}
          >
            {vehicle?.camera?.direction_type.toUpperCase()}
          </p> */}
          <p
            className={`mt-2 px-3 py-1 inline-block rounded-lg text-xs font-semibold ${
              vehicle?.direction?.toLowerCase() === "entry"
                ? "bg-green-600"
                : "bg-red-600"
            }`}
          >
            {vehicle?.direction.toUpperCase()}
          </p>

          {vehicle.speed_violation && vehicle.len_violation && (
            <p
              className={`mt-2 px-3 py-1 inline-block rounded-lg text-xs font-semibold bg-red-600`}
            >
              violated
            </p>
          )}
        </div>
        <p className="mt-2 text-accent font-semibold text-sm">
          Speed: {vehicle.speed} km/h
        </p>
        <div className="mt-1 relative">
          <p className="text-sm font-bold">
            {/* License:{" "} */}
            <span
              className="cursor-pointer text-white hover:text-accent underline"
              onMouseEnter={() => setShowLicensePopup(true)}
              onMouseLeave={() => setShowLicensePopup(false)}
            >
              {vehicle.license_number}
            </span>
          </p>
          {showLicensePopup && (
            <div className="absolute left-0 mt-2 p-2 bg-black shadow-lg rounded-lg">
              <img
                src={vehicle?.license_photo}
                alt="License Plate"
                className="w-48 h-24 object-contain"
              />
            </div>
          )}
        </div>
        <p className="mt-2 text-xs text-neutral-500">{vehicle?.created_at}</p>
      </div>
    </div>
  );
};

export default Vehicle;

