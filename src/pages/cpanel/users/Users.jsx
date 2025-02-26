import { useState } from "react";
import {
  Button,
  Input,
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Select,
  Option,
} from "@material-tailwind/react";
import { useGetUsersQuery } from "../../../app/services/userApi/userApi";

const Users = () => {
  const {
    data,
    // error: getUserError,
    // isError,
    // isLoading,
    // isSuccess,
    // refetch,
  } = useGetUsersQuery();
  console.log("data\n", data);

  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [newUser, setNewUser] = useState({
    email: "",
    phone: "",
    password: "",
    role: "admin",
  });

  const handleAddUser = () => {
    // setUsers([...users, { id: users.length + 1, ...newUser }]);
    setIsModalOpen(false);
    // setNewUser({ email: "", phone: "", password: "", role: "admin" });
  };

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
      <Dialog open={isModalOpen} handler={() => setIsModalOpen(false)}>
        <DialogHeader>Create User</DialogHeader>
        <DialogBody className="flex flex-col gap-2">
          <Input
            label="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="w-full p-2 border mb-3"
          />
          <Input
            label="Phone"
            value={newUser.phone}
            onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
            className="w-full p-2 border mb-3"
          />
          <Input
            type="password"
            label="Password"
            value={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
            className="w-full p-2 border mb-3"
          />
          <Select
            label="Role"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e })}
          >
            <Option value="admin">Admin</Option>
            <Option value="super_admin">Super Admin</Option>
          </Select>
        </DialogBody>
        <DialogFooter>
          <Button
            color="gray"
            onClick={() => setIsModalOpen(false)}
            className="mr-2"
          >
            Cancel
          </Button>
          <Button color="blue" onClick={handleAddUser}>
            Create User
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default Users;
