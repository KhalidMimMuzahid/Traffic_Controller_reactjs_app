import { useState } from "react";
import Camera from "./camera/camera";
import Vehicles from "./vehicles/vehicles";

const SingleCamera = () => {
  const [refreshAnalyzingData, setRefreshAnalyzingData] = useState(false);
  return (
    <div className="p-2 ">
      <div className="grid grid-cols-5 gap-4">
        <Vehicles setRefreshAnalyzingData={setRefreshAnalyzingData} />
        <Camera refreshAnalyzingData={refreshAnalyzingData} />
      </div>
    </div>
  );
};

export default SingleCamera;
