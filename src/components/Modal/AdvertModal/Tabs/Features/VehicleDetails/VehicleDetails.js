import "./vehicleDetails.scss";

const VehicleDetails = ({ vehicleDetails }) => {
  const collection = Object.entries(vehicleDetails);

  return (
    <div className='vehicleDetails'>
      <h3 className='title'>Vehicle details</h3>
      <ul className='detailsList'>
        {collection.map(([key, value]) => (
          <li key={key} className='detailsItem'>
            <span>{key}</span>
            <span className='detailsValue'>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleDetails;
