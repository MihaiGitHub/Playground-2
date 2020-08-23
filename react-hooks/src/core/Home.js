import React, { Fragment, useState, useEffect } from 'react';
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
            <div className="input-group input-group-lg">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-lg">Title</span>
                </div>

                <input 
                    onChange={handleChange('search')} 
                    value={search} type="text" 
                    className="form-control" 
                    aria-label="Large" 
                    aria-describedby="inputGroup-sizing-sm"
                />
            </div>
        </form>
    );

    return (
        <Fragment>
            <h1 className="mt-4">Search Posts</h1>

            {form()}

            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPosts.map((post, index) => (
                        <tr key={index}>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}

export default Home;