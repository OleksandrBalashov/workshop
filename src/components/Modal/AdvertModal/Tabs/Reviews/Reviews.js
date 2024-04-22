import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useAdvertContext } from "../../../../../application/AdvertContext";
import BookForm from "../BookForm";
import "./reviews.scss";
import ReviewCard from "./ReviewCard/ReviewCard";

const Reviews = () => {
  const {
    advert: { reviews },
  } = useAdvertContext();
  return (
    <div className='reviewsWrapper'>
      <ul className='reviewsList'>
        {reviews.map((review, i) => (
          <li key={uuidv4()}>
            <ReviewCard {...review} />
          </li>
        ))}
      </ul>
      <BookForm />
    </div>
  );
};

export default Reviews;
