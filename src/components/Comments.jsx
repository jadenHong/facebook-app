import React from 'react';

export const Comments = ({ comment }) => {
    console.log(comment)
    return (
        <div className="display-comments">
            <h4>Created at: {comment.created_at}</h4>
        </div>
    )
}