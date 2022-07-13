import React, { useEffect, useState } from "react";
import { getReviewComments } from "../utils/api";
import { useParams } from "react-router-dom";
import AddComment from "./AddComment";
import { deleteComment } from "../utils/api";
import { useNavigate } from "react-router-dom";

const Comments = ({ singleReview }) => {
  const navigate = useNavigate();
  const [currentComments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [deleted, setDeleted] = useState(false);

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

  const handleDelete = (event) => {
    setDeleted(false);
    event.preventDefault();
    deleteComment(event.target.value).then((res) => {
      setDeleted(true);
    });
  };

  const handleSubmit = () => {
    navigate(0);
  };

  if (deleted) {
    return (
      <div className="commentCard">
        <h2>Comment Deleted!</h2>
        <button onClick={handleSubmit}>Back to review</button>
      </div>
    );
  }

  return (
    <>
      <div>
        <button className="comments-btn" onClick={showCommentClick}>
          {showComments
            ? `Hide Comments`
            : singleReview.comment_count + " comments"}
        </button>

        {showComments ? (
          <>
            <ul className="review-comments" key={currentComments.review_id}>
              {currentComments.map((comment) => {
                return (
                  <li className="comments-list" key={currentComments.review_id}>
                    <p key={currentComments.review_id}>{comment.body}</p>
                    <h5 key={currentComments.review_id}>
                      Posted by {comment.author}
                    </h5>
                    {"tickle122" === comment.author ? (
                      <button
                        className="deleteBtn"
                        value={comment.comment_id}
                        onClick={(event) => {
                          handleDelete(event);
                        }}
                      >
                        Delete
                      </button>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </>
        ) : null}

        <AddComment singleReview={singleReview} />
      </div>
    </>
  );
};

export default Comments;
