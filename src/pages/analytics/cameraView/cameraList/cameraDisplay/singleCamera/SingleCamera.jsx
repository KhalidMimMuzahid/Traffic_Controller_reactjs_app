import Camera from "./camera/camera";
import Vehicles from "./vehicles/vehicles";

const SingleCamera = () => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="grid grid-cols-5 gap-4">
        <Vehicles />
        <Camera />
      </div>
    </div>
  );
};

export default SingleCamera;
