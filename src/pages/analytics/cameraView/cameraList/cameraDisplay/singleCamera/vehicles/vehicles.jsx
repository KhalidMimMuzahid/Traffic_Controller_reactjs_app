import Vehicle from "./vehicle/vehicle";

const Vehicles = () => {
  const vehicles = [
    {
      _id: "55555v56b4b545c",
      category: "Car",
      intersection: "Aamtoli",
      roadNo: 1,
      roadName: "Mirpur-1",
      directionType: "entry", // "exit"
      violationStatus: {
        lenViolation: true,
        speedViolation: true,
      },
      speed: 56,
      photo:
        "https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fHww",
      numberPlatePhoto: "",
      numberPlate:
        "https://media.istockphoto.com/id/488650296/photo/minnesota-licence-plate-with-fake-number.jpg?s=2048x2048&w=is&k=20&c=VPhPaSjTJYP92rILsvzBrcRTd5ppPhYUxTdO6a-VEwQ=",
    },
    {
      _id: "55555hfghty545c",
      category: "Car",
      intersection: "Aamtoli",
      roadNo: 1,
      roadName: "Mirpur-1",
      directionType: "entry", // "exit"
      violationStatus: {
        lenViolation: true,
        speedViolation: true,
      },
      speed: 56,
      photo:
        "https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fHww",
      numberPlatePhoto: "",
      numberPlate:
        "https://media.istockphoto.com/id/488650296/photo/minnesota-licence-plate-with-fake-number.jpg?s=2048x2048&w=is&k=20&c=VPhPaSjTJYP92rILsvzBrcRTd5ppPhYUxTdO6a-VEwQ=",
    },
    {
      _id: "555fg45rr6b4b545c",
      category: "Car",
      intersection: "Aamtoli",
      roadNo: 1,
      roadName: "Mirpur-1",
      directionType: "entry", // "exit"
      violationStatus: {
        lenViolation: true,
        speedViolation: true,
      },
      speed: 56,
      photo:
        "https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fHww",
      numberPlatePhoto: "",
      numberPlate:
        "https://media.istockphoto.com/id/488650296/photo/minnesota-licence-plate-with-fake-number.jpg?s=2048x2048&w=is&k=20&c=VPhPaSjTJYP92rILsvzBrcRTd5ppPhYUxTdO6a-VEwQ=",
    },
    {
      _id: "55g45vrrb545c",
      category: "Car",
      intersection: "Aamtoli",
      roadNo: 1,
      roadName: "Mirpur-1",
      directionType: "entry", // "exit"
      violationStatus: {
        lenViolation: true,
        speedViolation: true,
      },
      speed: 56,
      photo:
        "https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fHww",
      numberPlatePhoto: "",
      numberPlate:
        "https://media.istockphoto.com/id/488650296/photo/minnesota-licence-plate-with-fake-number.jpg?s=2048x2048&w=is&k=20&c=VPhPaSjTJYP92rILsvzBrcRTd5ppPhYUxTdO6a-VEwQ=",
    },
    {
      _id: "55fgb6r564b545c",
      category: "Car",
      intersection: "Aamtoli",
      roadNo: 1,
      roadName: "Mirpur-1",
      directionType: "entry", // "exit"
      violationStatus: {
        lenViolation: true,
        speedViolation: true,
      },
      speed: 56,
      photo:
        "https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fHww",
      numberPlatePhoto: "",
      numberPlate:
        "https://media.istockphoto.com/id/488650296/photo/minnesota-licence-plate-with-fake-number.jpg?s=2048x2048&w=is&k=20&c=VPhPaSjTJYP92rILsvzBrcRTd5ppPhYUxTdO6a-VEwQ=",
    },
    {
      _id: "55ffdv5dfb4b545c",
      category: "Car",
      intersection: "Aamtoli",
      roadNo: 1,
      roadName: "Mirpur-1",
      directionType: "entry", // "exit"
      violationStatus: {
        lenViolation: true,
        speedViolation: true,
      },
      speed: 56,
      photo:
        "https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fHww",
      numberPlatePhoto: "",
      numberPlate:
        "https://media.istockphoto.com/id/488650296/photo/minnesota-licence-plate-with-fake-number.jpg?s=2048x2048&w=is&k=20&c=VPhPaSjTJYP92rILsvzBrcRTd5ppPhYUxTdO6a-VEwQ=",
    },
  ];
  return (
    <div className="col-span-2">
      <div className="grid grid-cols-2 gap-1">
        {vehicles?.map((vehicle) => (
          <Vehicle key={vehicle?._id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  );
};

export default Vehicles;
