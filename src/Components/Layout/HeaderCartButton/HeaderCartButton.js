import { useContext, useEffect, useState } from 'react';

import CartIcon from '../../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import CartContext from '../../../Store/cart-context';

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);
	const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);

	const cartItemLength = cartCtx.items.reduce((currentValue, item) => {
		return currentValue + item.amount;
	}, 0);

	let classes = `${styles.button} ${isBtnHighlighted ? styles.bump : ''}`;
	useEffect(() => {
		if (cartCtx.items.length === 0) {
			return;
		}
		setIsBtnHighlighted(true);
		let timer = setTimeout(() => {
			setIsBtnHighlighted(false);
		}, 300);
		return () => {
			clearTimeout(timer);
		};
	}, [cartCtx.items]);
	return (
		<button className={classes} onClick={props.onClick}>
			<span className={styles.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={styles.badge}>{cartItemLength}</span>
		</button>
	);
};

export default HeaderCartButton;
