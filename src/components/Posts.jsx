import React from 'react';

export const Posts = ({ data }) => {


    return (
        <div className="display-posts">
            <h4>ID : {data.id}</h4>
            <h4>Title : {data.title}</h4>
            <h4>Username : {data.username}</h4>
            <h4>Content : {data.content}</h4>
        </div>
    )
}