/* eslint-disable react/prop-types */

import { useState } from "react";
import Paginate from "../../../../components/paginate/Paginate";
import AddZone from "./addZone/AddZone";

const Zone = ({ zones, setSelectedZone, metaData, setMetaData, refetch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 items-center">
        <div className="col-span-3">
          <div className="text-lg font-medium">Zone</div>
          <div className="text-sm text-gray-500">Zone Selection</div>
        </div>
        <div className="col-span-8">
          <select
            className="w-full p-2 border border-gray-300 rounded-md text-gray-700"
            onChange={(e) => setSelectedZone(e.target.value)}
          >
            <option value="">Select Zone</option>
            {zones?.map((zone, i) => (
              <option key={i} value={zone?.id}>
                {zone?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-1">
          <button
            onClick={() => setIsModalOpen(true)}
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
      <AddZone
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        refetch={refetch}
      />
    </div>
  );
};

export default Zone;
