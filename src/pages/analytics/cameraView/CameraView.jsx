/* eslint-disable react/prop-types */
import CameraList from "./cameraList/CameraList";

const CameraView = ({ selectedView }) => {
  return (
    <div className="flex-1">
      {/* header section  */}

      {/* camera List section  */}
      <CameraList selectedView={selectedView} />
    </div>
  );
};

export default CameraView;
