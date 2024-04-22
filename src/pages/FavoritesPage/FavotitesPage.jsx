import { useDispatch, useSelector } from "react-redux";
import {
  getFavoritesCollection,
  getIsLoading,
} from "../../redux/slices/selectors";
import { useEffect } from "react";
import { getAllAdverts } from "../../redux/slices/thunk";
import CardList from "../../components/CardList";
import AdvertModalContext, {
  useAdvertModalContext,
} from "../../components/Modal/AdvertModal/ModalContext";
import AdvertModal from "../../components/Modal/AdvertModal";
import Spinner from "../../components/Spinner";
import { Empty } from "antd";

const Favorites = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const filteredCollection = useSelector(getFavoritesCollection);
  const { isOpen, cardId } = useAdvertModalContext();

  useEffect(() => {
    dispatch(getAllAdverts());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {!filteredCollection.length && !isLoading && <Empty />}
      <CardList collection={filteredCollection} />
      {isOpen && <AdvertModal cardId={cardId} />}
    </>
  );
};

const FavoritesPage = () => (
  <AdvertModalContext>
    <Favorites />
  </AdvertModalContext>
);

export default FavoritesPage;
