import React from "react";
import { useEffect, useState } from "react";
import { getSingleReview } from "../utils/api";
import { useParams } from "react-router-dom";
import Votes from "./Votes";
import Comments from "./Comments";
import { LoadingBar } from "./LoadingBar";
import dayjs from "dayjs";

const ReviewCard = () => {
  const { review_id } = useParams();
  const [singleReview, setSingleReview] = useState({});
  const [loading, setLoading] = useState(true);

  const [isError, setError] = useState(null);

  useEffect(() => {
    getSingleReview(review_id)
      .then((data) => {
        setLoading(false);
        setSingleReview(data);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  }, [review_id]);

  if (isError) {
    return <p className="error">Oh no! Error!</p>;
  }
  if (loading) {
    return <LoadingBar />;
  }

  return (
    <>
      <div className="single-review" key={singleReview.review_id}>
      <img src={singleReview.review_img_url} alt={singleReview.title} />
        <div className="singleReviewText">
        <h2>{singleReview.title}</h2>
        <h3>{singleReview.designer}</h3>
       
        <p>{singleReview.review_body}</p>
        <p className="posted"> {`Posted: ${dayjs(singleReview.created_at)}`}</p>
        </div>
        <Votes singleReview={singleReview} />
        <Comments singleReview={singleReview} />
      </div>
    </>
  );
};

export default ReviewCard;
