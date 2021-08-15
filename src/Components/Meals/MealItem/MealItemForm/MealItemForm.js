import { useRef, useState } from 'react';
import Input from '../../../UI/Input/Input';
import styles from './MealItemForm.module.css';

const MealItemForm = (props) => {
	const amountInputRef = useRef();
	const [isAmountInputValid, setIsAmountInputValid] = useState(true);
	const submitHandler = (event) => {
		event.preventDefault();
		const amount = +amountInputRef.current.value;
		if (amount < 1 || amount > 5) {
			setIsAmountInputValid(false);
			return;
		}
		props.onSubmitAmount(amount);
	};

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: 'amount_' + props.id,
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<button>+ Add</button>
			{!isAmountInputValid && <p>Please enter a valid number!</p>}
		</form>
	);
};

export default MealItemForm;
