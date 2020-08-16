import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from './apiCore';

const Home = () => {
    const [ posts, setPosts ] = useState([]);

    const init = () => {
       getPosts().then(data => {
            setPosts(data);
       });
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <Fragment>
            <Link to="/sendRequest">Send Request</Link>

            <h2>Home</h2>

            <ul>
                {posts.map((post, index) => (
                    <li key={index}>
                        {post.title}
                    </li>
                ))}
            </ul>

        </Fragment>
    );
}

export default Home;