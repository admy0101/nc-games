import React from 'react';
import { useState } from 'react';
import { postReviewComment } from '../utils/api';

const AddComment = ({singleReview}) => {
const [text, setText] = useState("")
const [addComment, setAddComment] = useState(false)

const addCommentButton = () => {
    if(addComment === false) {
        setAddComment(true)
        
    } if(addComment === true) {
        setAddComment(false)
    }  
}

const onSubmit =(event) => {
   

    event.preventDefault()
    postReviewComment(singleReview.review_id, {username: "tickle122", body: text} ) 
}


    return (
        <div>
            <button onClick={addCommentButton}>Add comment</button>
            {addComment ? (
                <>
                <form onSubmit ={onSubmit}>
                <textarea className ="comment-form-textarea" value={text} onChange={(event) =>  setText(event.target.value)}></textarea>
                <button className="submit-comment">Submit Comment</button>
                </form>
                </>
            ) : null}
        </div>
    );
};

export default AddComment;