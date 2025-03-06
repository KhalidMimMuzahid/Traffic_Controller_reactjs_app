/* eslint-disable react/prop-types */

const Paginate = ({ metaData, setMetaData }) => {
  return (
    <div className="flex gap-2 justify-between">
      <div className="flex gap-2">
        <button
          className={`${
            metaData?.current !== 1 && "hover:cursor-pointer"
          } p-2 bg-secondary text-white rounded disabled:opacity-50`}
          onClick={() => {
            setMetaData((prev) => {
              return { ...prev, current: 1 };
            });
          }}
          disabled={metaData?.current === 1}
        >
          {"<< First"}
        </button>
        <button
          className={`${
            metaData?.current !== 1 && "hover:cursor-pointer"
          } p-2 bg-secondary text-white rounded disabled:opacity-50`}
          onClick={() => {
            setMetaData((prev) => {
              return { ...prev, current: metaData?.prev };
            });
          }}
          disabled={metaData?.current === 1}
        >
          {"< Prev"}
        </button>
      </div>

      <span className="p-2">
        {metaData?.current} of {metaData?.total}
      </span>
      <div className="flex gap-2">
        <button
          className={`${
            metaData?.current !== metaData?.total && "hover:cursor-pointer"
          } p-2 bg-secondary text-white rounded disabled:opacity-50`}
          onClick={() => {
            setMetaData((prev) => {
              return { ...prev, current: metaData?.next };
            });
          }}
          disabled={metaData?.current === metaData?.total}
        >
          {"Next >"}
        </button>
        <button
          className={`${
            metaData?.current !== metaData?.total && "hover:cursor-pointer"
          }  p-2 bg-secondary text-white rounded disabled:opacity-50`}
          onClick={() => {
            setMetaData((prev) => {
              return { ...prev, current: metaData?.total };
            });
          }}
          disabled={metaData?.current === metaData?.total}
        >
          {"Last >>"}
        </button>
      </div>
    </div>
  );
};

export default Paginate;
