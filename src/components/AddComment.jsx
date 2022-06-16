import React from 'react';
import { useState } from 'react';

const AddComment = () => {
const [addComment, setAddComment] = useState(false)

const addCommentButton = () => {
    if(addComment === false) {
        setAddComment(true)
        
    } if(addComment === true) {
        setAddComment(false)
    } console.log(addComment)   
}

    return (
        <div>
            <button onClick={addCommentButton}>Add comment</button>
            {setAddComment ? (
                <>
                <div>
                <p>Comment box</p>
                </div>
                </>
            ) : null}
        </div>
    );
};

export default AddComment;