import style from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

function Header(props) {
	return (
		<>
			<header className={style.header}>
				<h1>ReactMeals</h1>
				<button> Cart</button>
			</header>
			<div className={style['main-image']}>
				<img src={mealsImage} alt="A table full of delicious food!" />
			</div>
		</>
	);
}

export default Header;
