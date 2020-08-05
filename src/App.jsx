import React from 'react';
import { Posts, Comments } from './components';
import { useEffect } from 'react';
import { useState } from 'react';

export const App = () => {
    const URL = './data.json';
    const [postsArray, setPostsArray] = useState([]);
    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => console.log(data));
    }, []);
    return (
        <div className="diplay-borads">
            <Posts />
            <Comments />
        </div>
    )
}