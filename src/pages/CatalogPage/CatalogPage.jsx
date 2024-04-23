import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAdverts } from "../../redux/slices/thunk";
import { Button, Empty, Layout } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import CardList from "../../components/CardList";
import {
  getFilteredCollection,
  getIsLoading,
  getPage,
} from "../../redux/slices/selectors";
import "./catalogPage.scss";
import { increasePage } from "../../redux/slices/pageSlice";
import AdvertModalContext, {
  useAdvertModalContext,
} from "../../components/Modal/AdvertModal/ModalContext";
import AdvertModal from "../../components/Modal/AdvertModal";
import Spinner from "../../components/Spinner";

const { Content, Sider } = Layout;

const Catalog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const filteredCollection = useSelector(getFilteredCollection);

  const page = useSelector(getPage);
  const { isOpen, cardId } = useAdvertModalContext();

  const [pageCollection, setPageCollection] = useState([]);
  const [postsPerPage] = useState(4);

  const isLoadMoreVisible = pageCollection.length < filteredCollection.length;

  const setCollection = useCallback(() => {
    const indexOfLastPost = page * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const data = filteredCollection.slice(indexOfFirstPost, indexOfLastPost);

    if (page > 1) {
      setPageCollection((prev) => [...prev, ...data]);
      return;
    }

    setPageCollection(data);
  }, [filteredCollection, page, postsPerPage]);

  const handleMoreBtn = () => {
    dispatch(increasePage());
  };

  useEffect(() => {
    setCollection();
  }, [setCollection]);

  useEffect(() => {
    dispatch(getAllAdverts());
  }, [dispatch]);

  return (
    <Layout>
      <Sider
        width={360}
        style={{
          background: "#fff",
        }}
      >
        <Sidebar />
      </Sider>
      <Layout>
        <Content
          style={{
            paddingTop: 0,
            paddingLeft: 24,
            paddingRight: 24,
            margin: 0,
            minHeight: 280,
            background: "#fff",
            paddingBottom: 20,
          }}
        >
          {isLoading && <Spinner />}
          {!isLoading && <CardList collection={pageCollection} />}
          {!pageCollection.length && !isLoading && <Empty />}
          {isLoadMoreVisible && (
            <Button onClick={handleMoreBtn} className='loadMoreButton'>
              Load More
            </Button>
          )}
          {isOpen && <AdvertModal cardId={cardId} />}
        </Content>
      </Layout>
    </Layout>
  );
};

const CatalogPage = () => (
  <AdvertModalContext>
    <Catalog />
  </AdvertModalContext>
);

export default CatalogPage;
