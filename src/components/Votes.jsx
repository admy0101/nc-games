import React, { useState } from "react";
import { increaseDecreaseVotes } from "../utils/api";

const Votes = ({ singleReview, setSingleReview }) => {
  const [voteChange, setVoteChange] = useState(0);

  const increaseClick = (event) => {
    setVoteChange((currentVote) => currentVote + 1);
    increaseDecreaseVotes(singleReview.review_id, 1).catch((err) => {
      console.dir(err);
    });
    event.currentTarget.disabled = true;
  };

  const decreaseClick = (event) => {
    setVoteChange((currentVote) => currentVote - 1);
    increaseDecreaseVotes(singleReview.review_id, -1).catch((err) => {
      console.dir(err);
    });
    event.currentTarget.disabled = true;
  };

  return (
    <div>
      <h4>Votes: {singleReview.votes + voteChange}</h4>
      <button onClick={increaseClick}>Vote?</button>
      <button onClick={decreaseClick}>Downvote?</button>
    </div>
  );
};

export default Votes;
