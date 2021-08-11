import { Fragment } from 'react'

import styles from './Header.module.css'
import mealImg from '../../../Assets/meals.jpg'

const Header = props =>
{
    return (
        <Fragment>
            <header className={ styles.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={ styles["main-image"]}>
                <img src={ mealImg} alt="A table full of delicious foods!" />
            </div>
        </Fragment>
    )
}

export default Header;