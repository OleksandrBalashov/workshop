import { Avatar, Card, Rate } from "antd";
import "./reviewCard.scss";
const { Meta } = Card;

const ReviewCard = ({ reviewer_name, reviewer_rating, comment }) => {
  return (
    <Card
      style={{
        width: 450,
        boxShadow: "initial",
      }}
      bordered={false}
      className='reviewCard'
    >
      <Meta
        avatar={
          <Avatar
            style={{
              backgroundColor: "#F2F4F7",
              color: "red",
            }}
            size='large'
            gap={5}
          >
            {reviewer_name[0]}
          </Avatar>
        }
        title={reviewer_name}
        description={<Rate allowHalf defaultValue={reviewer_rating} />}
      />
      <p>{comment}</p>
    </Card>
  );
};

export default ReviewCard;
