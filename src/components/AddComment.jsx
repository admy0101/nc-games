import React from "react";
import { useState } from "react";
import { postReviewComment } from "../utils/api";
import {useNavigate} from 'react-router-dom'

const AddComment = ({ singleReview }) => {
  const [text, setText] = useState("");
  const [addComment, setAddComment] = useState(false);
  const navigate = useNavigate()
  

  const addCommentButton = () => {
    if (addComment === false) {
      setAddComment(true);
    }
    if (addComment === true) {
      setAddComment(false);
    }
  };
  

  const handleSubmit = (event) => {
   
    event.preventDefault();
    
    postReviewComment(singleReview.review_id, {
      username: "tickle122",
      body: text,
    });
    navigate("/submitted")
   
  };

  return (
    <div>
      <button onClick={addCommentButton}>Add comment</button>
      {addComment ? (
        <>
          <form onSubmit={handleSubmit}>
            <textarea
              className="comment-form-textarea"
              value={text}
              onChange={(event) => setText(event.target.value)}
            ></textarea>
            {<button className="submit-comment">Send</button>}
          </form>
        </>
      ) : null}
    </div>
  );
};

export default AddComment;
