import Input from '../../UI/Input';
import style from './MealItemForm.module.css';

function MealItemForm(props) {
	const input = {
		id: 'amount_' + props.id,
		type: 'number',
		min: '1',
		max: '10',
		step: '1',
		defaultValue: '1',
	};
	return (
		<form className={style.form}>
			<Input label="Amount" input={input} />
			<button>+ Add</button>
		</form>
	);
}

export default MealItemForm;
