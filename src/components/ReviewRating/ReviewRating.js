import { EnvironmentOutlined, StarFilled } from "@ant-design/icons";
import "./reviewRating.scss";

const ReviewRating = ({ rating, reviews, location }) => (
  <div className='wrapper'>
    <div className='reviews'>
      <StarFilled className='iconStar' />
      <span>{`${rating} (${reviews.length} Reviews)`}</span>
    </div>
    <div>
      <EnvironmentOutlined />
      <span className='location'>{location}</span>
    </div>
  </div>
);

export default ReviewRating;
