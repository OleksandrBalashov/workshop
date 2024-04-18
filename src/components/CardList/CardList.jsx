import AdvertCard from "./Card/AdvertCard";
import "./cardList.scss";

const CardList = ({ collection, setIsFetching }) => {
  return (
    <div className='cardListContainer'>
      {collection.map(({ _id, gallery, ...otherProps }) => (
        <AdvertCard key={_id} src={gallery[0]} id={_id} {...otherProps} />
      ))}
    </div>
  );
};

export default CardList;
