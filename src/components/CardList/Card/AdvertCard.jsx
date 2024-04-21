import { Avatar, Card, Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import "./advertCard.scss";
import DetailsList from "../../DetailsList";
import { updateAdvert } from "../../../api/fetchApi";
import { useState } from "react";
import { useAdvertModalContext } from "../../Modal/AdvertModal/ModalContext";
import ReviewRating from "../../ReviewRating";
const { Meta } = Card;

const AdvertCard = ({
  id,
  favorite,
  name,
  src,
  price,
  rating,
  reviews,
  location,
  description,
  details,
}) => {
  const [isFavorite, setIsFavorite] = useState(favorite);
  const { showModal } = useAdvertModalContext();

  const handleUpdate = async () => {
    const isUpdated = await updateAdvert(id, { favorite: !isFavorite });

    if (isUpdated) setIsFavorite(!isFavorite);
  };

  return (
    <>
      <Card style={{ width: "100%", marginTop: 16 }}>
        <div className='cardWrapper'>
          <Meta
            avatar={
              <Avatar
                src={src}
                shape='square'
                style={{ width: 290, height: 310 }}
              />
            }
          />
          <div className='detailsWrapper'>
            <div className='titleWrapper'>
              <h2 className='title'>{name}</h2>
              <p className='price'>&#8364;{`${price}`}.00</p>
              <HeartOutlined
                className={`icon ${isFavorite ? "active" : ""}`}
                onClick={handleUpdate}
              />
            </div>

            <div className='rating'>
              <ReviewRating
                rating={rating}
                reviews={reviews}
                location={location}
              />
            </div>

            <p className='description'>{description}</p>

            <div className='detailsWrp'>
              <DetailsList details={details} total={6} />
            </div>
            <Button
              className='showMoreBtn'
              type='primary'
              onClick={() => showModal(id)}
            >
              Show more
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default AdvertCard;
