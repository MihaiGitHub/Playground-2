import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from './apiCore';

const Home = () => {
    const [ posts, setPosts ] = useState([]);
    const [ filteredPosts, setFilteredPosts ] = useState([]);
    const [ search, setSearch ] = useState('');

    const init = () => {
       getPosts().then(data => {
            setPosts(data);
            setFilteredPosts(data);
       });
    }

    useEffect(() => {
        init();
    }, []);

    const handleChange = name => event => {
        setSearch(event.target.value);

        const filteredPosts = posts.filter((item) => {
            return item.title.toLowerCase().includes(event.target.value.toLowerCase());
        });

        setFilteredPosts(filteredPosts);
    }

    const form = () => (
        <form>
            <input onChange={handleChange('search')} type="text" placeholder="Search" value={search} />
        </form>
    );

    return (
        <Fragment>
            <Link to="/sendRequest">Send Request</Link>

            <h2>Home</h2>

            {form()}

            <ul>
                {filteredPosts.map((post, index) => (
                    <li key={index}>
                        {post.title}
                    </li>
                ))}
            </ul>

        </Fragment>
    );
}

export default Home;