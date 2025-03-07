import { TiDeleteOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
// import { Button, Input } from "@material-tailwind/react";
import Paginate from "../../../components/paginate/Paginate";
import {
  useDeleteIntersectionMutation,
  useGetIntersectionQuery,
} from "../../../app/services/intersectionApi/intersectionApi";
import { toast } from "react-toastify";

const Intersections = () => {
  const [metaData, setMetaData] = useState({ current: 1 });
  // const [search, setSearch] = useState("");
  const {
    data,
    // error: getUserError,
    // isError,
    isLoading,
    isSuccess,
    refetch,
  } = useGetIntersectionQuery({
    page: metaData?.current,
    // name: search,
  });
  const [
    deleteIntersection,
    {
      data: dataForDeleteIntersection,
      isError: isErrorForDeleteIntersection,
      error: errorForDeleteIntersection,
      isLoading: isLoadingForDeleteIntersection,
      isSuccess: isSuccessForDeleteIntersection,
    },
  ] = useDeleteIntersectionMutation();

  useEffect(() => {
    if (isSuccess) {
      setMetaData(data?.meta_data);
    }
  }, [isSuccess, data?.meta_data, isLoading]);

  useEffect(() => {
    if (!isLoadingForDeleteIntersection) {
      if (isSuccessForDeleteIntersection) {
        toast.success(dataForDeleteIntersection?.message);
        refetch();
      }
      if (isErrorForDeleteIntersection) {
        toast.error(errorForDeleteIntersection?.data?.error?.message);
      }
    }
  }, [
    dataForDeleteIntersection,
    isLoadingForDeleteIntersection,
    isSuccessForDeleteIntersection,
    isErrorForDeleteIntersection,
    errorForDeleteIntersection?.data?.error?.message,
    dataForDeleteIntersection?.message,
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
              <th className="p-3 text-center border">Name</th>
              <th className="p-3 text-center border">Zone (ID)</th>
              <th className="p-3 text-center border">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((intersection) => (
              <tr key={intersection?.id} className="border-b">
                <td className="p-3 text-center ">{intersection?.id}</td>
                <td className="p-3 text-center ">{intersection?.name}</td>
                <td className="p-3 text-center ">{`${intersection?.zone?.name} (${intersection?.zone?.id})`}</td>

                <td className="p-3 flex justify-center ">
                  <TiDeleteOutline
                    onClick={() => {
                      deleteIntersection({ id: intersection?.id });
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

export default Intersections;
