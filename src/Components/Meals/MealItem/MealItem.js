import { useContext } from 'react';
import MealItemForm from './MealItemForm/MealItemForm';
import styles from './MealItem.module.css';
import CartContext from '../../../Store/cart-context';

const MealItem = (props) => {
	const price = `$${props.price.toFixed(2)}`;
	const cartCtx = useContext(CartContext);
	const addToCartHandler = (amount) => {
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			price: props.price,
			description: props.description,
			amount: amount,
		});
	};
	return (
		<li className={styles.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={styles.description}>{props.description}</div>
				<div className={styles.price}> {price}</div>
			</div>
			<div>
				<MealItemForm id={props.id} onSubmitAmount={addToCartHandler} />
			</div>
		</li>
	);
};

export default MealItem;
