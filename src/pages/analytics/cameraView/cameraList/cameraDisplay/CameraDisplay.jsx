import SingleCamera from "./singleCamera/SingleCamera";

// eslint-disable-next-line react/prop-types
const CameraDisplay = ({ selectedView }) => {
  return selectedView === "single" ? (
    <SingleCamera />
  ) : (
    <div className="grid grid-cols-3 gap-2">
      {[...Array(9)].map((_, idx) => (
        <div
          key={idx}
          className="bg-gray-200 h-36 flex items-center justify-center rounded"
        >
          Video {idx + 1}
        </div>
      ))}
    </div>
  );
};

export default CameraDisplay;
