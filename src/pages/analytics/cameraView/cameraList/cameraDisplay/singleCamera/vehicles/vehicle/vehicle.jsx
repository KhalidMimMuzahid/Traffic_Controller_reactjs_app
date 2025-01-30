/* eslint-disable react/prop-types */
import "./vehicle.css";
import { IoMdPhotos } from "react-icons/io";

const Vehicle = ({ vehicle }) => {
  return (
    <div className="card bg-accent">
      <div
        className="top-section "
        style={{
          backgroundImage: `url(${vehicle?.photo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="border bg-neutral"></div>
        <div className="icons">
          <div className="logo ">
            <span className="text-primary">{vehicle?.category}</span>
          </div>
          <div className=" ">
            <IoMdPhotos className=" text-neutral" width={48} />
          </div>
        </div>
      </div>
      <div className="bottom-section ">
        <div>
          <span>
            Road: {vehicle?.roadName} ({vehicle?.roadNo})
          </span>
        </div>
        <div>
          <span>direction: {vehicle?.directionType}</span>
        </div>
        {(vehicle?.violationStatus?.lenViolation ||
          vehicle?.violationStatus?.speedViolation) && <div></div>}
        <div>
          <span>direction: {vehicle?.directionType}</span>
        </div>
      </div>
    </div>
  );
};

export default Vehicle;
