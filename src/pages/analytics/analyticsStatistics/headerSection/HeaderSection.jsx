import ViewSelection from "./viewSelection/ViewSelection";

/* eslint-disable react/prop-types */
const HeaderSection = ({ selectedView, setSelectedView }) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Real-Time Video Feeds</h2>
      <div className="mb-4 flex gap-2">
        <select className="border p-2 rounded w-1/3">
          <option>All</option>
        </select>
        <select className="border p-2 rounded w-1/3">
          <option>All</option>
        </select>
        <select className="border p-2 rounded w-1/3">
          <option>All</option>
        </select>
      </div>

      <ViewSelection
        selectedView={selectedView}
        setSelectedView={setSelectedView}
      />
    </div>
  );
};

export default HeaderSection;
