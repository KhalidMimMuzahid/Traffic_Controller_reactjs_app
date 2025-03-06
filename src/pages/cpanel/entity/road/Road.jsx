/* eslint-disable react/prop-types */

import { useState } from "react";
import Paginate from "../../../../components/paginate/Paginate";
import AddRoad from "./addRoad/AddRoad";
import { toast } from "react-toastify";

const Road = ({
  roads,
  setSelectedRoad,
  metaData,
  setMetaData,
  selectedIntersection,
  refetch,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-3">
          <div className="text-lg font-medium">Road</div>
          <div className="text-sm text-gray-500">Road Selection</div>
        </div>
        <div className="col-span-8">
          <select
            className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
            onChange={(e) => setSelectedRoad(e.target.value)}
          >
            <option value="">Select Road</option>
            {roads?.map((road, i) => (
              <option key={i} value={road?.id}>
                {road?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-1">
          <button
            onClick={() => {
              if (!selectedIntersection) {
                toast.error("please select a intersection first");
              } else {
                setIsModalOpen(true);
              }
            }}
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
      <AddRoad
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        refetch={refetch}
        selectedIntersection={selectedIntersection}
      />
      isModalOpen, setIsModalOpen, selectedIntersection, refetch,
    </div>
  );
};

export default Road;
