// eslint-disable-next-line react/prop-types
const ViewSelection = ({ selectedView, setSelectedView }) => {
  return (
    <div className="mb-4">
      <label className="mr-4 font-bold">View Mode:</label>
      <label
        className="mr-2 border border-black px-2 py-1 rounded-md hover:cursor-pointer"
        style={{
          background: selectedView === "grid" ? "gray" : "none",
        }}
      >
        <input
          hidden
          type="radio"
          name="viewMode"
          value="grid"
          checked={selectedView === "grid"}
          onChange={(e) => setSelectedView(e.target.value)}
          className="mr-1 "
        />
        Grid View
      </label>
      <label
        className="mr-2 border border-black px-2 py-1 rounded-md hover:cursor-pointer"
        style={{
          background: selectedView === "single" ? "gray" : "none",
        }}
      >
        <input
          hidden
          type="radio"
          name="viewMode"
          value="single"
          checked={selectedView === "single"}
          onChange={(e) => setSelectedView(e.target.value)}
          className="mr-1"
        />
        Single View
      </label>
    </div>
  );
};

export default ViewSelection;
