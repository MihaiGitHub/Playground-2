import { API } from '../config';

export const getPosts = () => {
    return fetch(`${API}/posts`, {
        method: "GET"
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
}

export const savePost = ({ title, body }) => {
    return fetch(`${API}/posts`, {
        method: 'POST',
        body: JSON.stringify({
        title,
        body,
        userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .catch(err => console.log(err));
}