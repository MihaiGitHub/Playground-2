import React, { Fragment, useState } from 'react';
import { saveData } from './apiCore';

const SaveData = () => {
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

        saveData({ title, body }).then(data => {
            setSavedPosts([ ...savedPosts, data ]);
        });
    }

    const form = () => (
        <form>
            <div className="row">
                <div className="col">
                    <input 
                        onChange={handleChange('title')} 
                        value={title} 
                        type="text" 
                        className="form-control" 
                        placeholder="Title"
                    />
                </div>
                <div className="col">
                    <input 
                        onChange={handleChange('body')} 
                        value={body} 
                        type="text" 
                        className="form-control" 
                        placeholder="Body"
                    />
                </div>
                <div className="col">
                    <button onClick={handleSubmit} className="btn btn-primary">Save</button>
                </div>
                <div className="col">
                    {JSON.stringify(values)}
                </div>
            </div>
        </form>
    );

    return (
        <Fragment>
            <h1 className="mt-4">Save Data</h1>

            {form()}

            <table className="table table-striped mt-5">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                    </tr>
                </thead>
                <tbody>
                    {savedPosts.map((post, index) => (
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

export default SaveData;