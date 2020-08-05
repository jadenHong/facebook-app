import React from 'react';
import { Comment } from './Comment';

export const Post = ({ data }) => {
    // const {id, title, username, content} = data;
    const { comments } = data;
    return (
        <div className="display-posts">
            <h4>ID : {data.id}</h4>
            <h4>Title : {data.title}</h4>
            <h4>Username : {data.username}</h4>
            <h4>Content : {data.content}</h4>
            <Comment commentData={comments} />
        </div>
    )
}