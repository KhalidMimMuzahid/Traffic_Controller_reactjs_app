import { TiDeleteOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
// import { Button, Input } from "@material-tailwind/react";
import Paginate from "../../../components/paginate/Paginate";
import {
  useDeleteCameraMutation,
  useGetCamerasQuery,
} from "../../../app/services/cameraApi/cameraApi";
import { toast } from "react-toastify";

const Cameras = () => {
  const [metaData, setMetaData] = useState({ current: 1 });
  // const [search, setSearch] = useState("");
  const {
    data,
    // error: getUserError,
    // isError,
    isLoading,
    isSuccess,
    refetch,
  } = useGetCamerasQuery({
    page: metaData?.current,
    // name: search,
  });

  const [
    deleteCamera,
    {
      data: dataForDeleteCamera,
      isError: isErrorForDeleteCamera,
      error: errorForDeleteCamera,
      isLoading: isLoadingForDeleteCamera,
      isSuccess: isSuccessForDeleteCamera,
    },
  ] = useDeleteCameraMutation();

  useEffect(() => {
    if (isSuccess) {
      setMetaData(data?.meta_data);
    }
  }, [isSuccess, data?.meta_data, isLoading]);

  useEffect(() => {
    if (!isLoadingForDeleteCamera) {
      if (isSuccessForDeleteCamera) {
        toast.success(dataForDeleteCamera?.message);
        refetch();
      }
      if (isErrorForDeleteCamera) {
        toast.error(errorForDeleteCamera?.data?.error?.message);
      }
    }
  }, [
    dataForDeleteCamera,
    isLoadingForDeleteCamera,
    isSuccessForDeleteCamera,
    isErrorForDeleteCamera,
    errorForDeleteCamera?.data?.error?.message,
    dataForDeleteCamera?.message,
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
              <th className="p-3 text-center border">Intersection (ID)</th>
              <th className="p-3 text-center border">Road (ID)</th>
              <th className="p-3 text-center border">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((camera) => (
              <tr key={camera?.id} className="border-b">
                <td className="p-3 text-center ">{camera?.id}</td>
                <td className="p-3 text-center ">{camera?.name}</td>
                <td className="p-3 text-center ">{`${camera?.zone?.name} (${camera?.zone?.id})`}</td>
                <td className="p-3 text-center ">{`${camera?.intersection?.name} (${camera?.intersection?.id})`}</td>
                <td className="p-3 text-center ">{`${camera?.road?.name} (${camera?.road?.id})`}</td>
                <td className="p-3 flex justify-center ">
                  <TiDeleteOutline
                    onClick={() => {
                      deleteCamera({ id: camera?.id });
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

export default Cameras;
