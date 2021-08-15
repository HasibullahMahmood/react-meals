import { useContext } from 'react';
import CartContext from '../../Store/cart-context';
import Modal from '../UI/Modal/Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
	const cartCtx = useContext(CartContext);
	const showOrderBtn = cartCtx.items.length > 0;
	const addHandler = (item) => {
		cartCtx.addItem(item);
	};
	const removeHandler = (id) => {
		cartCtx.remoteItem(id);
	};

	return (
		<Modal onClose={props.onHideCart}>
			<ul className={styles['cart-items']}>
				{cartCtx.items.map((item) => {
					return (
						<CartItem
							key={item.id}
							name={item.name}
							amount={item.amount}
							price={item.price}
							onRemove={removeHandler.bind(null, item.id)}
							onAdd={addHandler.bind(null, item)}
						/>
					);
				})}
			</ul>
			<div className={styles.total}>
				<span>Total Amount</span>
				<span>{`$${cartCtx.totalPrice.toFixed(2)}`}</span>
			</div>
			<div className={styles.actions}>
				<button className={styles['button--alt']} onClick={props.onHideCart}>
					Close
				</button>

				{showOrderBtn && <button className={styles.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;
