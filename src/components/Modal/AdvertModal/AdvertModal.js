import React, { useEffect } from "react";
import { Modal, Image } from "antd";
import { useAdvertModalContext } from "./ModalContext";
import Spinner from "../../Spinner";
import ReviewRating from "../../ReviewRating";
import Tabs from "./Tabs/Tabs";

import "./advertModal.scss";
import AdvertContext, {
  useAdvertContext,
} from "../../../application/AdvertContext";

const Advert = () => {
  const { isOpen, hideModal } = useAdvertModalContext();
  const { getAdvertById, advert, isFetching } = useAdvertContext();

  useEffect(() => {
    getAdvertById();
  }, []);

  const modalRender = () => {
    const { name, rating, location, reviews, price, gallery, description } =
      advert;

    return (
      name && (
        <div className='renderWrapper'>
          <h2 className='title'>{name}</h2>
          <div className='rating'>
            <ReviewRating
              rating={rating}
              reviews={reviews}
              location={location}
            />
          </div>
          <p className='price'>&#8364;{`${price}`}.00</p>

          <div className='imgWrapper'>
            <Image.PreviewGroup>
              {gallery.map((img) => (
                <Image width={300} src={img} alt={name} />
              ))}
            </Image.PreviewGroup>
          </div>

          <p className='description'>{description}</p>

          <Tabs />
        </div>
      )
    );
  };

  return (
    <Modal
      centered
      open={isOpen}
      onOk={hideModal}
      onCancel={hideModal}
      width={1000}
      footer={null}
    >
      {isFetching && <Spinner />}
      {modalRender()}
    </Modal>
  );
};

const AdvertModal = ({ cardId }) => (
  <AdvertContext cardId={cardId}>
    <Advert />;
  </AdvertContext>
);

export default AdvertModal;
