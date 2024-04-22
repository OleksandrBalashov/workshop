import { createContext, useCallback, useContext, useState } from "react";
import { findAdvertById } from "../api/fetchApi";

const useAdvert = (cardId) => {
  const [advert, setAdvert] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  const getAdvertById = useCallback(async () => {
    setIsFetching(true);

    try {
      const data = await findAdvertById(cardId);

      setAdvert(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsFetching(false);
    }
  }, [cardId]);

  return {
    getAdvertById,
    advert,
    isFetching,
  };
};

const AdvertContext = createContext(null);

export const useAdvertContext = () => {
  const context = useContext(AdvertContext);

  if (!context) {
    throw new Error("useAdvert must be used within AdvertModalProvider");
  }

  return context;
};

const AdvertContextProvider = ({ children, cardId }) => (
  <AdvertContext.Provider value={useAdvert(cardId)}>
    {children}
  </AdvertContext.Provider>
);

export default AdvertContextProvider;
