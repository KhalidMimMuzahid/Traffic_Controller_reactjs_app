import { TiDeleteOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
// import { Button, Input } from "@material-tailwind/react";
import Paginate from "../../../components/paginate/Paginate";
import {
  useDeleteRoadMutation,
  useGetRoadsQuery,
} from "../../../app/services/roadApi/roadApi";
import { toast } from "react-toastify";

const Roads = () => {
  const [metaData, setMetaData] = useState({ current: 1 });
  // const [search, setSearch] = useState("");
  const {
    data,
    // error: getUserError,
    // isError,
    isLoading,
    isSuccess,
    refetch,
  } = useGetRoadsQuery({
    page: metaData?.current,
    // name: search,
  });

  const [
    deleteRoad,
    {
      data: dataForDeleteRoad,
      isError: isErrorForDeleteRoad,
      error: errorForDeleteRoad,
      isLoading: isLoadingForDeleteRoad,
      isSuccess: isSuccessForDeleteRoad,
    },
  ] = useDeleteRoadMutation();

  useEffect(() => {
    if (isSuccess) {
      setMetaData(data?.meta_data);
    }
  }, [isSuccess, data?.meta_data, isLoading]);

  useEffect(() => {
    if (!isLoadingForDeleteRoad) {
      if (isSuccessForDeleteRoad) {
        toast.success(dataForDeleteRoad?.message);
        refetch();
      }
      if (isErrorForDeleteRoad) {
        toast.error(errorForDeleteRoad?.data?.error?.message);
      }
    }
  }, [
    dataForDeleteRoad,
    isLoadingForDeleteRoad,
    isSuccessForDeleteRoad,
    isErrorForDeleteRoad,
    errorForDeleteRoad?.data?.error?.message,
    dataForDeleteRoad?.message,
    refetch,
  ]);
  return (
    <div className="p-6 bg-neutral min-h-screen">
      {/* <div className="flex gap-2  justify-between items-center mb-4">
        <Input
          label="Search by zone name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <Button
          color="blue"
          // onClick={() => setIsModalOpen(true)}
        >
          Add New
        </Button>
      </div> */}

      <div className="w-full flex flex-col gap-2">
        <table className="w-full bg-white shadow-md rounded">
          <thead>
            <tr className="bg-secondary text-white">
              <th className="p-3 text-center border">ID</th>
              <th className="p-3 text-center border">Name (NO)</th>
              <th className="p-3 text-center border">Zone (ID)</th>
              <th className="p-3 text-center border">Intersection (ID)</th>
              <th className="p-3 text-center border">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((road) => (
              <tr key={road?.id} className="border-b">
                <td className="p-3 text-center ">{road?.id}</td>
                <td className="p-3 text-center ">{`${road?.name} (${road?.road_no})`}</td>
                <td className="p-3 text-center ">{`${road?.zone?.name} (${road?.zone?.id})`}</td>
                <td className="p-3 text-center ">{`${road?.intersection?.name} (${road?.intersection?.id})`}</td>
                <td className="p-3 flex justify-center ">
                  <TiDeleteOutline
                    onClick={() => {
                      deleteRoad({ id: road?.id });
                    }}
                    // color="red"
                    size="24px"
                    className="hover:cursor-pointer text-red-500"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Paginate metaData={metaData} setMetaData={setMetaData} />
      </div>
    </div>
  );
};

export default Roads;
