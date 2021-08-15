import { useState } from 'react';
import Header from './Components/Layout/Header/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider';

function App() {
	const [isCartShown, setIsCartShown] = useState(false);

	const showCartHandler = () => {
		setIsCartShown(true);
	};

	const hideCartHandler = () => {
		setIsCartShown(false);
	};

	return (
		<main>
			<CartProvider>
				<Header onShowCart={showCartHandler} />
				<Meals />
				{isCartShown && <Cart onHideCart={hideCartHandler} />}
			</CartProvider>
		</main>
	);
}

export default App;
