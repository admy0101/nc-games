import React from "react";
import { useEffect, useState } from "react";
import { getSingleReview } from "../utils/api";
import { useParams } from "react-router-dom";
import Votes from "./Votes";

const ReviewCard = () => {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});

  const [isError, setError] = useState(null);

  useEffect(() => {
    getSingleReview(review_id)
      .then((data) => {
        console.log("this is a review request");
        setSingleReview(data);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  }, [review_id]);

  if (isError) {
    return <p className="error">Oh no! Error!</p>;
  }

  return (
    <>
      <div className="single-review" key={singleReview.review_id}>
        <h2>{singleReview.title}</h2>
        <h3>{singleReview.designer}</h3>
        <img src={singleReview.review_img_url} alt={singleReview.title} />
        <p>{singleReview.review_body}</p>

        <Votes singleReview={singleReview} />
        <h4>Comments: {singleReview.comment_count}</h4>
      </div>
    </>
  );
};

export default ReviewCard;
