import { useState } from "react";
import AnalyticsStatistics from "./analyticsStatistics/AnalyticsStatistics";
import CameraView from "./cameraView/CameraView";

const Analytics = () => {
  const [selectedView, setSelectedView] = useState("grid"); // 'grid' , 'single'
  return (
    <div className="flex flex-col lg:flex-row p-4 gap-4">
      <div className="flex-1">
        <CameraView selectedView={selectedView} />
      </div>
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <AnalyticsStatistics
          selectedView={selectedView}
          setSelectedView={setSelectedView}
        />
      </div>
    </div>
  );
};

export default Analytics;
