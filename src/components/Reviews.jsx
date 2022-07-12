import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { LoadingBar } from "./LoadingBar";

const Reviews = () => {
  const { category } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReviews(category).then((response) => {
      setReviews(response);
      setLoading(false);
    });
  }, [category]);

  if (loading) {
    return <LoadingBar />;
  }

  return (
    <div>
      <h2 className="review-cat-title">
        {category ? `${category} games` : "All Reviews"}
      </h2>
      <ul className="allReviews">
        {reviews.map((review) => {
          return (
            <Link
              className="reviewCard"
              to={`/reviews/${review.review_id}`}
              key={review.review_id}
            >
              <li className="reviewsList" key={review.review_id}>
              <img src={review.review_img_url} alt={review.title} />
              <div className="reviewsListText">
                <h3 className="review-title">{review.title}</h3>
                <h3>Votes: {review.votes}</h3>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
