/* eslint-disable react/prop-types */
import { useState } from "react";

const Vehicle = ({ vehicle }) => {
  const [showLicensePopup, setShowLicensePopup] = useState(false);
  return (
    <div className="relative bg-primary text-white rounded-xl shadow-lg overflow-hidden">
      <img
        src={vehicle.photo}
        alt="Vehicle"
        className="w-full h-40 object-cover"
      />
      <div className="px-3 py-1">
        <h2 className="text-lg font-bold text-primary">{vehicle.category}</h2>
        <p className="text-sm text-neutral-400">
          <span className="font-semibold">Intersection:</span>{" "}
          {vehicle.intersection}
        </p>
        <p className="text-sm text-neutral-400">
          <span className="font-semibold">Road:</span> {vehicle.roadName} (#
          {vehicle.roadNo})
        </p>

        <div className="flex gap-2">
          <p
            className={`mt-2 px-3 py-1 inline-block rounded-lg text-xs font-semibold ${
              vehicle.directionType === "entry" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {vehicle.directionType.toUpperCase()}
          </p>

          {vehicle.violationStatus.speedViolation &&
            vehicle.violationStatus.lenViolation && (
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
              {vehicle.licenseNumber}
            </span>
          </p>
          {showLicensePopup && (
            <div className="absolute left-0 mt-2 p-2 bg-black shadow-lg rounded-lg">
              <img
                src={vehicle.numberPlatePhoto}
                alt="License Plate"
                className="w-48 h-24 object-contain"
              />
            </div>
          )}
        </div>
        <p className="mt-2 text-xs text-neutral-500">8:30:23 AM</p>
      </div>
    </div>
  );
};

export default Vehicle;

