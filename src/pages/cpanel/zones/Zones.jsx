import { TiDeleteOutline } from "react-icons/ti";
import { useEffect, useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import {
  useDeleteZoneMutation,
  useGetZonesQuery,
} from "../../../app/services/zoneApi/zoneApi";
import Paginate from "../../../components/paginate/Paginate";
import { toast } from "react-toastify";

const Zones = () => {
  const [metaData, setMetaData] = useState({ current: 1 });
  const [search, setSearch] = useState("");
  const {
    data,
    // error: getUserError,
    // isError,
    isLoading,
    isSuccess,
    refetch,
  } = useGetZonesQuery({
    page: metaData?.current,
    name: search,
  });
  const [
    deleteZone,
    {
      data: dataForDeleteZone,
      isError: isErrorForDeleteZone,
      error: errorForDeleteZone,
      isLoading: isLoadingForDeleteZone,
      isSuccess: isSuccessForDeleteZone,
    },
  ] = useDeleteZoneMutation();

  useEffect(() => {
    if (isSuccess) {
      setMetaData(data?.meta_data);
    }
  }, [isSuccess, data?.meta_data, isLoading]);

  useEffect(() => {
    if (!isLoadingForDeleteZone) {
      if (isSuccessForDeleteZone) {
        toast.success(dataForDeleteZone?.message);
        refetch();
      }
      if (isErrorForDeleteZone) {
        toast.error(errorForDeleteZone?.data?.error?.message);
      }
    }
  }, [
    dataForDeleteZone,
    isLoadingForDeleteZone,
    isSuccessForDeleteZone,
    isErrorForDeleteZone,
    errorForDeleteZone?.data?.error?.message,
    dataForDeleteZone?.message,
    refetch,
  ]);
  return (
    <div className="p-6 bg-neutral min-h-screen">
      <div className="flex gap-2  justify-between items-center mb-4">
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
      </div>

      <div className="w-full flex flex-col gap-2">
        <table className="w-full bg-white shadow-md rounded">
          <thead>
            <tr className="bg-secondary text-white">
              <th className="p-3 text-center border">ID</th>
              <th className="p-3 text-center border">Name</th>
              <th className="p-3 text-center border">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((zone) => (
              <tr key={zone?.id} className="border-b">
                <td className="p-3 text-center ">{zone?.id}</td>
                <td className="p-3 text-center ">{zone?.name}</td>
                <td className="p-3 flex justify-center ">
                  <TiDeleteOutline
                    onClick={() => {
                      deleteZone({ id: zone?.id });
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

export default Zones;
