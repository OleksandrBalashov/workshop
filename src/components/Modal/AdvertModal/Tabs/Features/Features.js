import { Divider } from "antd";
import DetailsList from "../../../../DetailsList";
import { useAdvertContext } from "../../../../../application/AdvertContext";
import VehicleDetails from "./VehicleDetails/VehicleDetails";

const Features = () => {
  const {
    advert: { details, form, length, width, height, tank, consumption },
  } = useAdvertContext();

  const vehicleDetails = { form, length, width, height, tank, consumption };

  return (
    <div>
      <DetailsList details={details} />
      <Divider />
      <VehicleDetails vehicleDetails={vehicleDetails} />
    </div>
  );
};

export default Features;
