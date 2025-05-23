import { useEffect } from "react";
import { useGetVehiclesCountAnalysisQuery } from "../../../../../../../app/services/vehicleApi/vehicleApi";

// eslint-disable-next-line react/prop-types
const Camera = ({ refreshAnalyzingData }) => {
  // const [search, setSearch] = useState("");
  const {
    data: vehicleAnalysisData,
    // error: getUserError,
    // isError,
    // isLoading,
    // isSuccess,
    refetch,
  } = useGetVehiclesCountAnalysisQuery({
    camera_id: 1,
  });

  useEffect(() => {
    refetch();
  }, [refreshAnalyzingData, refetch]);
  // useEffect(() => {
  //   if (isSuccess) {
  //     setMetaData(vehicleData?.meta_data);
  //   }
  // }, [isSuccess, vehicleData?.meta_data, isLoading]);

  return (
    <div className="col-span-3 ">
      {/* Center Column - Live Video Feed */}
      <div
        className="col-span-2 flex items-center justify-center bg-black h-96"
        style={{
          border: "16px solid black",
          borderRadius: "0.5rem", // Equivalent to Tailwind's `rounded-lg`
        }}
      >
        <img
          src={`http://127.0.0.1:8000/api/v1/files/get-video-stream?camera_id=1`}
          alt="Live CCTV Stream"
          // className="border-4 border-accent rounded-lg shadow-lg"
          className="w-full max-h-full text-white text-center"
        />

        {/* <video autoPlay loop muted playsInline className="w-full max-h-full">
          <source
            src="/src/app/asssets/videos/live_camera_view.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video> */}
      </div>
      {/* Bottom Section - Entry and Exit Table */}
      <div className="mt-4 bg-white rounded shadow p-4">
        <h2 className="text-lg font-bold mb-2">Entry and Exit Summary</h2>
        <table className="table-auto w-full text-center border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Vehicle Type</th>
              <th className="border px-4 py-2">Entry</th>
              <th className="border px-4 py-2">Exit</th>
            </tr>
          </thead>
          <tbody>
            {vehicleAnalysisData?.data?.data?.map((each, idx) => (
              <tr key={idx}>
                <td className="border px-4 py-2">{each?.category}</td>
                <td className="border px-4 py-2">{each?.totalEntry}</td>
                <td className="border px-4 py-2">{each?.totalExit}</td>
              </tr>
            ))}
            <tr className="font-bold bg-gray-100">
              <td className="border px-4 py-2">Total</td>

              <td className="border px-4 py-2">
                {vehicleAnalysisData?.data?.totalEntry || 0}
              </td>

              <td className="border px-4 py-2">
                {vehicleAnalysisData?.data?.totalExit || 0}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Camera;
