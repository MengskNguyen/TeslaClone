import React from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { setShowState } from '~/features/burgerNav/burgerNavSlice';
import { selectCars } from '~/features/carSlice/carSlice';

import styles from './Header.module.scss';
import logo from '~/assets/images/logo1.svg';
import BurgerNav from '../BurgerNav';

const cx = classNames.bind(styles);

const Header = () => {
    const dispatch = useDispatch();
    const cars = useSelector(selectCars);

    console.log('cars: ', cars);

    return (
        <div className={cx('wrapper')}>
            <img className={cx('logo')} src={logo} alt="Tesla" />
            <div className={cx('menu')}>
                {cars.cars &&
                    cars.cars.map((car, index) => (
                        <a key={index} href="https://www.youtube.com/">
                            <span>{car}</span>
                        </a>
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
