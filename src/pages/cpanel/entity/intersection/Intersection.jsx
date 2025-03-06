/* eslint-disable react/prop-types */

import Paginate from "../../../../components/paginate/Paginate";

const Intersection = ({
  intersections,
  setSelectedIntersection,
  metaData,
  setMetaData,
}) => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-3">
          <div className="text-lg font-medium">Intersection</div>
          <div className="text-sm text-gray-500">Intersection Selection</div>
        </div>
        <div className="col-span-8">
          <select
            className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
            onChange={(e) => setSelectedIntersection(e.target.value)}
          >
            <option value="">Select Intersection</option>
            {intersections?.map((intersection, i) => (
              <option key={i} value={intersection?.id}>
                {intersection?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-1">
          <button
            // onClick={() => setAddBrandModal(!addBrandModal)}
            className="text-white text-xl"
          >
            +
          </button>
        </div>
      </div>
      {/* show pagination only if there have more than one page */}
      {metaData?.total > 1 && (
        <Paginate metaData={metaData} setMetaData={setMetaData} />
      )}
    </div>
  );
};

export default Intersection;
