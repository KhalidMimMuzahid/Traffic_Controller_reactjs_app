/* eslint-disable react/prop-types */
import HeaderSection from "./headerSection/HeaderSection";

const AnalyticsStatistics = ({ selectedView, setSelectedView }) => {
  return (
    <div>
      {/* <h1>LocationFilter</h1> */}
      <HeaderSection
        selectedView={selectedView}
        setSelectedView={setSelectedView}
      />
      {/* <h1>TrafficFlowChart </h1> */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-2">Traffic Flow by Location</h2>
        <div className="h-32 bg-gray-200 flex items-center justify-center rounded">
          Chart Placeholder
        </div>
      </div>
      {/* <h1>VehicleDetails</h1> */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-2">Latest Vehicle Details</h2>
        <ul className="text-sm">
          <li>
            <strong>Class:</strong> Motorcycle
          </li>
          <li>
            <strong>Speed:</strong> 81 km/h
          </li>
          <li>
            <strong>Direction:</strong> West
          </li>
          <li>
            <strong>District:</strong> -
          </li>
          <li>
            <strong>Thana:</strong> -
          </li>
          <li>
            <strong>Zone:</strong> -
          </li>
        </ul>
      </div>
      {/* <h1>VehicleClassChart</h1> */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-2">Total Class-wise Vehicles</h2>
        <div className="h-32 bg-gray-200 flex items-center justify-center rounded">
          Chart Placeholder
        </div>
      </div>
    </div>
  );
};

export default AnalyticsStatistics;
