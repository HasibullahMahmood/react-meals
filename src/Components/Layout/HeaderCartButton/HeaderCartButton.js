import { useContext } from 'react';

import CartIcon from '../../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import CartContext from '../../../Store/cart-context';

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);
	const cartItemLength = cartCtx.items.reduce((currentValue, item) => {
		return currentValue + item.amount;
	}, 0);
	return (
		<button className={styles.button} onClick={props.onClick}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>{cartItemLength}</span>
		</button>
	);
};

export default HeaderCartButton;
