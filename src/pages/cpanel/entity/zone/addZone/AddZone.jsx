/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  Button,
  Input,
  Dialog,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import { useAddZoneMutation } from "../../../../../app/services/zoneApi/zoneApi";

const AddZone = ({ isModalOpen, setIsModalOpen, refetch }) => {
  const [addZone, { data, isError, error, isLoading, isSuccess }] =
    useAddZoneMutation();

  const [newZone, setNewZone] = useState({
    name: null,
  });

  const handleAddZone = () => {
    if (!newZone?.name) {
      // toast.error("please input zone name");
      return;
    }

    addZone(newZone);
  };

  useEffect(() => {
    if (!isLoading) {
      if (isSuccess && data?.is_success) {
        toast(data?.message);
        refetch();
        setIsModalOpen(false);
        setNewZone({
          name: null,
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
    setNewZone,
    refetch,
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
            label="Name"
            required
            value={newZone.name}
            onChange={(e) => setNewZone({ ...newZone, name: e.target.value })}
            className="w-full p-2 border mb-3"
          />
        </DialogBody>
        <hr className="border-gray-300 opacity-20" />
        <DialogFooter>
          <Button
            color="gray"
            onClick={() => {
              setNewZone({
                name: null,
              });
              setIsModalOpen(false);
            }}
            className="mr-2"
          >
            Cancel
          </Button>
          <Button color="blue" onClick={handleAddZone} className="w-[150px]">
            {isLoading ? "Adding Zone..." : "Add Zone"}
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default AddZone;
