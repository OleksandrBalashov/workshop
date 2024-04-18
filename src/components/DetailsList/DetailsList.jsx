import React from "react";
import "./detailsList.scss";

const DetailsList = ({ details, total = 6 }) => {
  const collection = Object.keys(details).slice(0, total);

  return (
    <ul className='detailsListContainer'>
      {collection.map((item) => (
        <li className='details' key={item}>
          <p>{`${details[item] > 1 ? details[item] : ""} ${item}`}</p>
        </li>
      ))}
    </ul>
  );
};

export default DetailsList;
