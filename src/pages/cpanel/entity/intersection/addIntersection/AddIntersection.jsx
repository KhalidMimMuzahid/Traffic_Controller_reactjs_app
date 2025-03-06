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
import { useAddIntersectionMutation } from "../../../../../app/services/intersectionApi/intersectionApi";

const AddIntersection = ({
  isModalOpen,
  setIsModalOpen,
  selectedZone,
  refetch,
}) => {
  const [addIntersection, { data, isError, error, isLoading, isSuccess }] =
    useAddIntersectionMutation();

  const [newIntersection, setNewIntersection] = useState({
    name: "",
    zone_id: selectedZone,
  });

  useEffect(() => {
    setNewIntersection({
      name: "",
      zone_id: selectedZone,
    });
  }, [selectedZone]);

  const handleAddIntersection = () => {
    addIntersection(newIntersection);
  };

  useEffect(() => {
    if (!isLoading) {
      if (isSuccess && data?.is_success) {
        toast(data?.message);
        refetch();
        setIsModalOpen(false);
        setNewIntersection({
          name: "",
          zone_id: selectedZone,
        });
      } else if (isError && error) {
        toast.error(error?.data?.error?.message);
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
    setNewIntersection,
    refetch,
    selectedZone,
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
            value={newIntersection.name}
            onChange={(e) =>
              setNewIntersection({ ...newIntersection, name: e.target.value })
            }
            className="w-full p-2 border mb-3"
          />
        </DialogBody>
        <hr className="border-gray-300 opacity-20" />
        <DialogFooter>
          <Button
            color="gray"
            onClick={() => {
              setNewIntersection({
                name: "",
                zone_id: selectedZone,
              });
              setIsModalOpen(false);
            }}
            className="mr-2"
          >
            Cancel
          </Button>
          <Button
            color="blue"
            onClick={handleAddIntersection}
            className="w-[150px]"
          >
            {isLoading ? "Adding Intersection..." : "Add Intersection"}
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default AddIntersection;
