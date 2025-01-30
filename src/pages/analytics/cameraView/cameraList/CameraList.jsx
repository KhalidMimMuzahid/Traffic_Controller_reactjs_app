/* eslint-disable react/prop-types */
import CameraDisplay from "./cameraDisplay/CameraDisplay";

const CameraList = ({ selectedView }) => {
  return (
    <div>
      <CameraDisplay selectedView={selectedView} />
    </div>
  );
};

export default CameraList;
