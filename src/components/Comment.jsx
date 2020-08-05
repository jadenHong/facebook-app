import React from 'react';

export const Comment = ({ commentData }) => {
    const [date] = commentData;
    return (
        <div className="display-comments">
            <h4>Created at: {date.created_at}</h4>
        </div>
    )
}
/* {
    data.comments.map((comment, index) => {
        return <Comments key={index} comment={comment} />
    })
} */