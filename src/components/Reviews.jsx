import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((response) => {
      setReviews(response);
    });
  }, []);

  return (
    <div>
      <ul className="allReviews">
        {reviews.map((review) => {
          return (
            <li className="reviewsList" key={review.review_id}>
              <h3>{review.title}</h3>
              <img src={review.review_img_url} alt={review.title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
