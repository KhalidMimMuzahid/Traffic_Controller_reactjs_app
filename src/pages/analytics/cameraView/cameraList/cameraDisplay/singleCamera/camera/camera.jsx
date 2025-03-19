const Camera = () => {
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
        <video autoPlay loop muted playsInline className="w-full max-h-full">
          <source
            src="/src/app/asssets/videos/live_camera_view.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
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
            {["Car", "Bicycle", "MotorBike", "Bus", "Truck"].map(
              (type, idx) => (
                <tr key={idx}>
                  <td className="border px-4 py-2">{type}</td>
                  <td className="border px-4 py-2">
                    {Math.floor(Math.random() * 10)}
                  </td>
                  <td className="border px-4 py-2">
                    {Math.floor(Math.random() * 10)}
                  </td>
                </tr>
              )
            )}
            <tr className="font-bold bg-gray-100">
              <td className="border px-4 py-2">Total</td>
              <td className="border px-4 py-2">7</td>
              <td className="border px-4 py-2">11</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Camera;
