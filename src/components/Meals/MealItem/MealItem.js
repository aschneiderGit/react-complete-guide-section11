import style from './MealItem.module.css';

function MealItem(props) {
	const price = `$${props.price.toFixed(2)}`;
	return (
		<li className={style.meal}>
			<div>
				<h3> {props.name}</h3>
				<div className={style.description}> {props.desc} </div>
				<div className={style.price}>{price}</div>
			</div>
			<di></di>
		</li>
	);
}

export default MealItem;
