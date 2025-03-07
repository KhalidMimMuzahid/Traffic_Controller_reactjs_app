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
import { toast } from "react-toastify";
import { useAddCameraMutation } from "../../../../../app/services/cameraApi/cameraApi";

const AddCamera = ({ isModalOpen, setIsModalOpen, selectedRoad, refetch }) => {
  const [addCamera, { data, isError, error, isLoading, isSuccess }] =
    useAddCameraMutation();

  const [newCamera, setNewCamera] = useState({
    name: null,
    direction_type: null,
    road_id: selectedRoad,
  });

  useEffect(() => {
    setNewCamera({
      name: null,
      direction_type: null,
      road_id: selectedRoad,
    });
  }, [selectedRoad]);

  const handleAddCamera = () => {
    if (!newCamera?.name || !newCamera?.direction_type) {
      // toast.error("please input zone name");
      return;
    }
    addCamera(newCamera);
  };

  useEffect(() => {
    if (!isLoading) {
      if (isSuccess && data?.is_success) {
        toast(data?.message);
        refetch();
        setIsModalOpen(false);
        setNewCamera({
          name: null,
          direction_type: null,
          road_id: selectedRoad,
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
    setNewCamera,
    refetch,
    selectedRoad,
  ]);
  return (
    <div>
      <Dialog
        open={isModalOpen}
        handler={() => setIsModalOpen(false)}
        className="h-[400px]"
      >
        <DialogHeader>Create Road</DialogHeader>
        <DialogBody className="flex flex-col gap-2">
          <Input
            label="Name"
            required
            value={newCamera.name}
            onChange={(e) =>
              setNewCamera({ ...newCamera, name: e.target.value })
            }
            className="w-full p-2 border mb-3"
          />
          <Select
            label="Direction type"
            value={newCamera.direction_type}
            onChange={(e) => setNewCamera({ ...newCamera, direction_type: e })}
          >
            <Option value="entry">Entry</Option>
            <Option value="exit">Exit</Option>
          </Select>
        </DialogBody>
        <hr className="border-gray-300 opacity-20" />
        <DialogFooter>
          <Button
            color="gray"
            onClick={() => {
              setNewCamera({
                name: null,
                direction_type: null,
                road_id: selectedRoad,
              });
              setIsModalOpen(false);
            }}
            className="mr-2"
          >
            Cancel
          </Button>
          <Button color="blue" onClick={handleAddCamera} className="w-[150px]">
            {isLoading ? "Adding Camera..." : "Add Camera"}
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default AddCamera;
