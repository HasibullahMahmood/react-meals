import React from 'react';

const CartContext = React.createContext({
	items: [],
	totalPrice: 0,
	addItem: (item) => {},
	remoteItem: (id) => {},
});

export default CartContext;
