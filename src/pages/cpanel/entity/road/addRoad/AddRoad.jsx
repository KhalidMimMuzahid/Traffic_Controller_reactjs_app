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
import { useAddRoadMutation } from "../../../../../app/services/roadApi/roadApi";

const AddRoad = ({
  isModalOpen,
  setIsModalOpen,
  selectedIntersection,
  refetch,
}) => {
  const [addRoad, { data, isError, error, isLoading, isSuccess }] =
    useAddRoadMutation();

  const [newRoad, setNewRoad] = useState({
    name: null,
    road_no: null,
    intersection_id: selectedIntersection,
  });

  useEffect(() => {
    setNewRoad({
      name: null,
      road_no: null,
      intersection_id: selectedIntersection,
    });
  }, [selectedIntersection]);

  const handleAddRoad = () => {
    if (!newRoad?.name || !newRoad?.road_no) {
      // toast.error("please input zone name");
      return;
    }
    addRoad(newRoad);
  };

  useEffect(() => {
    if (!isLoading) {
      if (isSuccess && data?.is_success) {
        toast(data?.message);
        refetch();
        setIsModalOpen(false);
        setNewRoad({
          name: null,
          road_no: null,
          intersection_id: selectedIntersection,
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
    setNewRoad,
    refetch,
    selectedIntersection,
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
            value={newRoad.name}
            onChange={(e) => setNewRoad({ ...newRoad, name: e.target.value })}
            className="w-full p-2 border mb-3"
          />
          <Input
            label="Road No"
            required
            type="number"
            value={newRoad.road_no}
            onChange={(e) =>
              setNewRoad({ ...newRoad, road_no: e.target.value })
            }
            className="w-full p-2 border mb-3"
          />
        </DialogBody>
        <hr className="border-gray-300 opacity-20" />
        <DialogFooter>
          <Button
            color="gray"
            onClick={() => {
              setNewRoad({
                name: null,
                road_no: null,
                intersection_id: selectedIntersection,
              });
              setIsModalOpen(false);
            }}
            className="mr-2"
          >
            Cancel
          </Button>
          <Button color="blue" onClick={handleAddRoad} className="w-[150px]">
            {isLoading ? "Adding Road..." : "Add Road"}
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default AddRoad;
