import { useState } from "react";
import AnalyticsStatistics from "./analyticsStatistics/AnalyticsStatistics";
import CameraView from "./cameraView/CameraView";

const Analytics = () => {
  const [selectedView, setSelectedView] = useState("grid"); // 'grid' , 'single'
  return (
    <div className="flex flex-col lg:flex-row gap-2  min-h-[97vh]">
      <div
        className="flex-1   my-1 rounded-xl  bg-secondary"
        // style={{
        //   minHeight: "90vh",
        // }}
      >
        <CameraView selectedView={selectedView} />
      </div>
      <div className="w-full lg:w-1/4 flex flex-col gap-3 bg-secondary my-1 rounded-xl ">
        <AnalyticsStatistics
          selectedView={selectedView}
          setSelectedView={setSelectedView}
        />
      </div>
    </div>
  );
};

export default Analytics;
