import React from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { setShowState } from '~/features/burgerNav/burgerNavSlice';
import { selectCars } from '~/features/carSlice/carSlice';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import logo from '~/assets/images/logo1.svg';
import BurgerNav from '../BurgerNav';

const cx = classNames.bind(styles);

const Header = () => {
    const dispatch = useDispatch();
    const cars = useSelector(selectCars);

    const removeSpace = (input) => {
        const newInput = input.replace(' ', '');
        return `/${newInput}`;
    };

    return (
        <div className={cx('wrapper')}>
            <Link to="/">
                <img className={cx('logo')} src={logo} alt="Tesla" />
            </Link>
            <div className={cx('menu')}>
                {cars.cars &&
                    cars.cars.map((car, index) => (
                        <Link key={index} to={removeSpace(car)}>
                            <span>{car}</span>
                        </Link>
                    ))}
                <a href="https://www.youtube.com/">
                    <span>Solar Roof</span>
                </a>
                <a href="https://www.youtube.com/">
                    <span>Solar Panels</span>
                </a>
            </div>
            <div className={cx('right-menu')}>
                <a href="https://www.youtube.com/">
                    <span>Shop</span>
                </a>
                <a href="https://www.youtube.com/">
                    <span>Account</span>
                </a>
                <button onClick={() => dispatch(setShowState())}>
                    <span>Menu</span>
                </button>
            </div>
            <BurgerNav />
        </div>
    );
};

export default Header;
