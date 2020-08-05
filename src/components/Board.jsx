import React from 'react';
import { Post } from './Posts';
import '../Style/Board.css';

export const Board = ({ postsArray }) => {
    return (
        <div>
            {postsArray.map((data, index) => {
                // console.log(data.comments.map((comment) => comment.created_at))
                return (
                    <div key={index} className="display-boards">
                        <Post data={data} />
                    </div>
                )
            })}
        </div>
    )
}