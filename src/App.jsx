import React from 'react';
import { Posts, Comments } from './components';
import { useEffect } from 'react';
import { useState } from 'react';
import { data } from './data.js';

export const App = () => {
    const [postsArray, setPostsArray] = useState([]);
    /* const [postInfo, setPostInfo] = useState({
        id: 0,
        title: '',
        username: '',
        content: '',
    }) */
    useEffect(() => {
        setPostsArray(data.posts);
    }, []);



    return (
        <div className="diplay-borads">
            {postsArray.map((data, index) => {
                // console.log(data.comments.map((comment) => comment.created_at))
                return (
                    <div key={index}>
                        <Posts data={data} />
                        {data.comments.map((comment) => {
                            return <Comments comment={comment} />
                        })}


                    </div>
                )
            })}
        </div>
    )
}