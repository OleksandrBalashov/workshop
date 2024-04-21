import { Divider } from "antd";
import DetailsList from "../../../../DetailsList";
import { useAdvertContext } from "../../../../../application/AdvertContext";
import VehicleDetails from "./VehicleDetails/VehicleDetails";
import BookForm from "../BookForm";
import "./features.scss";

const Features = () => {
  const {
    advert: { details, form, length, width, height, tank, consumption },
  } = useAdvertContext();

  const vehicleDetails = { form, length, width, height, tank, consumption };

  return (
    <div className='featuresWrapper'>
      <div className='featuresDetails'>
        <DetailsList details={details} />
        <Divider />
        <VehicleDetails vehicleDetails={vehicleDetails} />
      </div>
      <BookForm />
    </div>
  );
};

export default Features;
