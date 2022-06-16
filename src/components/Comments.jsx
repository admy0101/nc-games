import React, { useEffect, useState } from "react";
import { getReviewComments } from "../utils/api";
import { useParams } from "react-router-dom";

const Comments = ({ singleReview }) => {
  const [currentComments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const { review_id } = useParams();

  useEffect(() => {
    getReviewComments(review_id).then((comments) => {
      setComments(comments);
    });
  }, [review_id]);

  const showCommentClick = () => {
    if (showComments === false) {
      setShowComments(true);
    }
    if (showComments === true) {
      setShowComments(false);
    }
  };

  return (
    <>
      <div>
        <h4>Comments: {singleReview.comment_count}</h4>
        <button
          className="comments-btn"
          onClick={showCommentClick}
        >
          {showComments ? `Hide Comments` : "Show Comments"}
        </button>

        {showComments ? (
          <>
            <ul className="review-comments" key={currentComments.review_id}>
              {currentComments.map((comment) => {
                return (
                  <li className="comments-list" key={currentComments.review_id}>
                    <h3 key={currentComments.review_id}>{comment.body}</h3>
                    <h5 key={currentComments.review_id}>
                      Posted by {comment.author}
                    </h5>
                  </li>
                );
              })}
            </ul>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Comments;
