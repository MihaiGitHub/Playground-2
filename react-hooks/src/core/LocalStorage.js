import React, { Fragment, useState, useEffect } from 'react';
import { saveItem, getItems, deleteItem } from './localStorageHelpers';

const LocalStorage = () => {
    const [ cart, setCart ] = useState([]);
    const [ values, setValues ] = useState({
        title: '',
        body: ''
    });

    const { title, body } = values;

    useEffect(() => {
        getItems(getItemsCallback);
    }, []);

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    }

    const getItemsCallback = cart => {
        setCart(cart);
    }

    const handleSubmit = event => {
        event.preventDefault();

        saveItem( title, body, getItemsCallback);
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

    const handleDelete = id => {
        deleteItem(id, getItemsCallback);
    }

    return (
        <Fragment>
            <h1 className="mt-4">Local Storage</h1>

            <hr />

            <h4>Add item to local storage</h4>

            {form()}

            <br /><br />

            <h4>Items in local storage</h4>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                            <td>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="btn btn-danger btn-sm rounded-0" 
                                    type="button" 
                                    data-toggle="tooltip" 
                                    data-placement="top" 
                                    title="" 
                                    data-original-title="Delete"
                                >
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}

export default LocalStorage;