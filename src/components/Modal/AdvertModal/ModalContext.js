import { createContext, useContext, useState } from "react";

const useAdvertModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cardId, setCardId] = useState(0);

  const showModal = (id) => {
    setIsOpen(true);
    setCardId(id);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return {
    cardId,
    isOpen,
    showModal,
    hideModal,
  };
};

const AdvertModalContext = createContext(null);

export const useAdvertModalContext = () => {
  const context = useContext(AdvertModalContext);

  if (!context) {
    throw new Error(
      "useAdvertModal must be used within AdvertModalContextProvider"
    );
  }

  return context;
};

const AdvertModalContextProvider = ({ children }) => (
  <AdvertModalContext.Provider value={useAdvertModal()}>
    {children}
  </AdvertModalContext.Provider>
);

export default AdvertModalContextProvider;
