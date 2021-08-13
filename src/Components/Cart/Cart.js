import styles from './Cart.module.css';

const Cart = (props) => {
	const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 10.22 }];
	return (
		<div>
			<ul className={styles['cart-items']}>
				{cartItems.map((item) => {
					return <div>{item.name}</div>;
				})}
			</ul>
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>35.62</span>
			</div>
			<div className={styles.actions}>
				<button className={styles['button--alt']}>Close</button>
				<button className={styles.button}>Order</button>
			</div>
		</div>
	);
};

export default Cart;
