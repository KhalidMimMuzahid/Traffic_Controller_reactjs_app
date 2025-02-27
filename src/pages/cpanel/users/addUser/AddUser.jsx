/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
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
import { useAddUserMutation } from "../../../../app/services/userApi/userApi";
import { toast } from "react-toastify";

const AddUser = ({ isModalOpen, setIsModalOpen }) => {
  const [addUser, { data, isError, error, isLoading, isSuccess }] =
    useAddUserMutation();
  const [newUser, setNewUser] = useState({
    email: "",
    name: "",
    password: "",
    role: "admin",
    secret_key: "",
  });
  const handleAddUser = () => {
    console.log({ newUser });
    addUser(newUser);
    // setUsers([...users, { id: users.length + 1, ...newUser }]);
    // setIsModalOpen(false);
    // setNewUser({ email: "", phone: "", password: "", role: "admin" });
  };
  useEffect(() => {
    if (!isLoading) {
      if (isSuccess && data?.is_success) {
        toast(data?.message);
        setIsModalOpen(false);
        setNewUser({
          email: "",
          name: "",
          password: "",
          role: "admin",
          secret_key: "",
        });
      } else if (isError && error) {
        //   toast.error(error?.data?.error?.message);
      }
    }
  }, [
    isLoading,
    error,
    isError,
    isSuccess,
    data?.is_success,
    data?.message,
    setIsModalOpen,
    setNewUser,
  ]);
  return (
    <div>
      <Dialog
        open={isModalOpen}
        handler={() => setIsModalOpen(false)}
        className="h-[400px]"
      >
        <DialogHeader>Create User</DialogHeader>
        <DialogBody className="flex flex-col gap-2">
          <Input
            label="Email"
            required
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className="w-full p-2 border mb-3"
          />
          <Input
            label="Name"
            required
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            className="w-full p-2 border mb-3"
          />
          {/* <Input
            label="Secret Key"
            required
            value={newUser.secret_key}
            onChange={(e) =>
              setNewUser({ ...newUser, secret_key: e.target.value })
            }
            className="w-full p-2 border mb-3"
          /> */}
          <Input
            type="password"
            label="Password"
            required
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
        <div className="flex justify-center h-[30px]">
          {error?.data?.error?.message && (
            <span className="text-red-900 font-bold">
              {error?.data?.error?.message}
            </span>
          )}
        </div>
        <DialogFooter>
          <Button
            color="gray"
            onClick={() => {
              setNewUser({
                email: "",
                name: "",
                password: "",
                role: "admin",
                secret_key: "",
              });
              setIsModalOpen(false);
            }}
            className="mr-2"
          >
            Cancel
          </Button>
          <Button color="blue" onClick={handleAddUser} className="w-[150px]">
            {isLoading ? "Creating..." : "Create User"}
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default AddUser;
