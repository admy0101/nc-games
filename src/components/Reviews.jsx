import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Reviews = () => {
  const { category } = useParams();
  const [reviews, setReviews] = useState([]);
  

  useEffect(() => {
    getReviews(category).then((response) => {
      setReviews(response);
    });
  }, [category]);

  return (
    <div>
      <h2 className="review-cat-title">
        {category ? `${category} games` : "All Reviews"}
      </h2>
      <ul className="allReviews">
        {reviews.map((review) => {
          return (
            <Link className='reviewCard' to={`/reviews/${review.review_id}`} key={review.review_id}>
            <li className="reviewsList" key={review.review_id}>
              <h3>{review.title}</h3>
              <img src={review.review_img_url} alt={review.title} />
              <h2>Votes: {review.votes}</h2>
            </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
