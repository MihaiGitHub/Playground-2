export const saveItem = (title, body, callback) => {
    let cart = [];
    
    if(typeof window !== 'undefined'){
        if(localStorage.getItem('cart')){
           cart = JSON.parse(localStorage.getItem('cart'));
        }

        const id = Date.now();

        cart.push({ id, title, body });

        localStorage.setItem('cart', JSON.stringify(cart));

        callback(cart);
    }
}

export const getItems = callback => {
    let cart = [];

    if(typeof window !== 'undefined'){
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
        }

        callback(cart);
    }
}

export const deleteItem = (id, callback) => {
    let cart = [];

    if(typeof window !== 'undefined'){
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
        }

        cart = cart.filter((item, index) => {
            return item.id !== id;
        });

        localStorage.setItem('cart', JSON.stringify(cart));
    
        callback(cart);
    }
}