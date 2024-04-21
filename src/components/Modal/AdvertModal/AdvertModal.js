import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { useAdvertModalContext } from "./ModalContext";
import { findAdvertById } from "../../../api/fetchApi";

const AdvertModal = () => {
  const { isOpen, cardId, hideModal } = useAdvertModalContext();
  const [advert, setAdvert] = useState({});

  useEffect(() => {
    const getAdvertById = async () => {
      const data = await findAdvertById(cardId);
      setAdvert(data);
    };

    isOpen && getAdvertById();
  }, [cardId, isOpen]);

  return (
    <Modal
      title={advert.name}
      centered
      open={isOpen}
      onOk={hideModal}
      onCancel={hideModal}
      width={1000}
      footer={null}
    ></Modal>
  );
};

export default AdvertModal;
