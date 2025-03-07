import { useEffect, useState } from "react";
import { useGetZonesQuery } from "../../../app/services/zoneApi/zoneApi";
import Zone from "./zone/Zone";
import { useGetIntersectionQuery } from "../../../app/services/intersectionApi/intersectionApi";
import Intersection from "./intersection/Intersection";
import { useGetRoadsQuery } from "../../../app/services/roadApi/roadApi";
import Road from "./road/Road";
import { useGetCamerasQuery } from "../../../app/services/cameraApi/cameraApi";
import Camera from "./camera/Camera";
const Entity = () => {
  // ZONE________________________________________________________________
  const [selectedZone, setSelectedZone] = useState();
  const [metaDataForZone, setMetaDataForZone] = useState({ current: 1 });
  const {
    data: zoneData,
    // error: zoneError,
    // isError,
    isLoading: isLoadingForZone,
    isSuccess: isSuccessForZone,
    refetch: refetchForZone,
  } = useGetZonesQuery(metaDataForZone?.current);
  useEffect(() => {
    if (isSuccessForZone) {
      setMetaDataForZone(zoneData?.meta_data);
    }
  }, [isSuccessForZone, zoneData?.meta_data, isLoadingForZone]);

  // Intersection________________________________________________________________
  const [selectedIntersection, setSelectedIntersection] = useState();
  const [metaDataForIntersection, setMetaDataForIntersection] = useState({
    current: 1,
  });
  const {
    data: intersectionData,
    // error: zoneError,
    // isError,
    isLoading: isLoadingForIntersection,
    isSuccess: isSuccessForIntersection,
    refetch: refetchForIntersection,
  } = useGetIntersectionQuery(
    { page: metaDataForIntersection?.current, zoneId: selectedZone },
    {
      skip: !selectedZone,
    }
  );
  useEffect(() => {
    if (isSuccessForIntersection) {
      setMetaDataForIntersection(intersectionData?.meta_data);
    }
  }, [
    isSuccessForIntersection,
    intersectionData?.meta_data,
    isLoadingForIntersection,
  ]);

  // Road________________________________________________________________
  const [selectedRoad, setSelectedRoad] = useState();
  const [metaDataForRoad, setMetaDataForRoad] = useState({
    current: 1,
  });
  const {
    data: roadData,
    // error: zoneError,
    // isError,
    isLoading: isLoadingForRoad,
    isSuccess: isSuccessForRoad,
    refetch: refetchForRoad,
  } = useGetRoadsQuery(
    { page: metaDataForRoad?.current, intersectionId: selectedIntersection },
    {
      skip: !selectedIntersection,
    }
  );
  useEffect(() => {
    if (isSuccessForRoad) {
      setMetaDataForRoad(roadData?.meta_data);
    }
  }, [isSuccessForRoad, roadData?.meta_data, isLoadingForRoad]);

  // Camera________________________________________________________________
  const [metaDataForCamera, setMetaDataForCamera] = useState({
    current: 1,
  });
  const {
    data: cameraData,
    // error: zoneError,
    // isError,
    isLoading: isLoadingForCamera,
    isSuccess: isSuccessForCamera,
    refetch: refetchForCamera,
  } = useGetCamerasQuery(
    { page: metaDataForCamera?.current, roadId: selectedRoad },
    {
      skip: !selectedRoad,
    }
  );
  useEffect(() => {
    if (isSuccessForCamera) {
      setMetaDataForCamera(cameraData?.meta_data);
    }
  }, [isSuccessForCamera, cameraData?.meta_data, isLoadingForCamera]);
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center p-10">
      <div className="w-full  bg-secondary p-6 rounded-lg shadow-md space-y-4">
        <div className="flex flex-col gap-6">
          <hr className="border-gray-300 opacity-20" />
          {/* Zone Selection */}
          <Zone
            zones={zoneData?.data}
            setSelectedZone={setSelectedZone}
            metaData={metaDataForZone}
            setMetaData={setMetaDataForZone}
            refetch={refetchForZone}
          />
          <hr className="border-gray-300 opacity-20" />
          {/* Intersection Selection */}
          <Intersection
            intersections={intersectionData?.data}
            setSelectedIntersection={setSelectedIntersection}
            metaData={metaDataForIntersection}
            setMetaData={setMetaDataForIntersection}
            selectedZone={selectedZone}
            refetch={refetchForIntersection}
          />
          <hr className="border-gray-300 opacity-20" />
          {/* Road Selection */}
          <Road
            roads={roadData?.data}
            setSelectedRoad={setSelectedRoad}
            metaData={metaDataForRoad}
            setMetaData={setMetaDataForRoad}
            selectedIntersection={selectedIntersection}
            refetch={refetchForRoad}
          />
          <hr className="border-gray-300 opacity-20" />

          {/* Road Selection */}
          <Camera
            cameras={cameraData?.data}
            metaData={metaDataForCamera}
            setMetaData={setMetaDataForCamera}
            selectedRoad={selectedRoad}
            refetch={refetchForCamera}
          />
          <hr className="border-gray-300 opacity-20" />
        </div>
      </div>
    </div>
  );
};

export default Entity;
