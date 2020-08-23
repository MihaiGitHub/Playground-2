import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { savePost } from './apiCore';

const SendRequest = () => {
    const [ values, setValues ] = useState({
        title: '',
        body: ''
    });

    const [ savedPosts, setSavedPosts ] = useState([]);
    const { title, body } = values;

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        savePost({ title, body }).then(data => {
            setSavedPosts([ ...savedPosts, data ]);
        });
    }

    const form = () => (
        <form>
            <input onChange={handleChange('title')} type="text" value={title} placeholder="Title" />
            <input onChange={handleChange('body')} type="text" value={body} placeholder="Body" />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    );

    return (
        <Fragment>
            <Link to="/">Home</Link>

            <h2>Send Request</h2>

            {form()}

            <br/>

            {JSON.stringify(values)}

            <ul>
                {savedPosts.map((post, index) => (
                    <li key={index}>{post.title}</li>
                ))}
            </ul>
            
        </Fragment>
    );
}

export default SendRequest;