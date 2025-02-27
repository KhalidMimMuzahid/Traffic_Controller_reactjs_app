import { useEffect, useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { useGetUsersQuery } from "../../../app/services/userApi/userApi";
import AddUser from "./addUser/AddUser";

const Users = () => {
  const [metaData, setMetaData] = useState({ current: 1 });
  const {
    data,
    // error: getUserError,
    // isError,
    // isLoading,
    isSuccess,
    // refetch,
  } = useGetUsersQuery(metaData?.current);

  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setMetaData(data?.meta_data);
    }
  }, [isSuccess, data?.meta_data]);
  return (
    <div className="p-6 bg-neutral min-h-screen">
      <div className="flex gap-2  justify-between items-center mb-4">
        <Input
          label="Search by ID or Email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <Button color="blue" onClick={() => setIsModalOpen(true)}>
          Add New
        </Button>
      </div>

      <div className="w-full flex flex-col gap-2">
        <table className="w-full bg-white shadow-md rounded">
          <thead>
            <tr className="bg-secondary text-white">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((user) => (
              <tr key={user?.id} className="border-b">
                <td className="p-3">{user?.id}</td>
                <td className="p-3">{user?.name}</td>
                <td className="p-3">{user?.email}</td>
                <td className="p-3">{user?.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination Buttons */}
        <div className="flex gap-2 justify-end">
          <button
            className="p-2 bg-secondary text-white rounded disabled:opacity-50"
            onClick={() => {
              setMetaData((prev) => {
                return { ...prev, current: 1 };
              });
            }}
            disabled={metaData?.current === 1}
          >
            First
          </button>
          <button
            className="p-2 bg-secondary text-white rounded disabled:opacity-50"
            onClick={() => {
              setMetaData((prev) => {
                return { ...prev, current: prev?.current - 1 };
              });
            }}
            disabled={metaData?.current === 1}
          >
            Prev
          </button>
          <span className="p-2">
            {metaData?.current} / {metaData?.total}
          </span>
          <button
            className="p-2 bg-secondary text-white rounded disabled:opacity-50"
            onClick={() => {
              setMetaData((prev) => {
                return { ...prev, current: prev?.current + 1 };
              });
            }}
            disabled={metaData?.current === metaData?.total}
          >
            Next
          </button>
          <button
            className="p-2 bg-secondary text-white rounded disabled:opacity-50"
            onClick={() => {
              setMetaData((prev) => {
                return { ...prev, current: metaData?.total };
              });
            }}
            disabled={metaData?.current === metaData?.total}
          >
            Last
          </button>
        </div>
      </div>

      <AddUser isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};

export default Users;
