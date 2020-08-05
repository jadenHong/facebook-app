import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { data } from './data.js';
import { Board } from './components';

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
        <div>
            <Board postsArray={postsArray} />
        </div>
    )
}