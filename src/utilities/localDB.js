import Swal from "sweetalert2";


//manage cart data
const addToDB = id => {
    let cart = {};

    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }

    // add quantity
    if (cart[id]) {
        cart[id] += 1;
    } else {
        cart[id] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}


// Get cart
const getStoredCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');

    if(storedCart) {
        cart = JSON.parse(storedCart);
    }

    return cart;
}

// remove product
const removeFromDB = id => {
    let cart = {};

    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }

    delete cart[id];

    localStorage.setItem('cart', JSON.stringify(cart));

    Swal.fire(
        'Product Removed!',
        `You've Removed a Product!`,
        'info'
      )

    setTimeout(() => window.location.reload(), 1000);
}

// Delete Shopping Cart
const deleteShoppingCart = () => {
    localStorage.removeItem('cart');
    window.location.reload();
}

export {
    addToDB,
    getStoredCart,
    removeFromDB,
    deleteShoppingCart
}