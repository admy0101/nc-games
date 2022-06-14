import { useEffect, useState} from "react";
import { getReviews } from "../utils/api";
import {useParams} from "react-router-dom"

const Reviews = () => {
  const {category} = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {

    getReviews(category).then((response) => {

      setReviews(response);
    });
  }, [category]);

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
