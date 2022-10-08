import React, { useRef } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { setShowState, getShowState } from '~/features/burgerNav/burgerNavSlice';
import { selectCars } from '~/features/carSlice/carSlice';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import logo from '~/assets/images/logo1.svg';
import BurgerNav from '../BurgerNav';

const cx = classNames.bind(styles);

const Header = () => {
    const dispatch = useDispatch();
    const cars = useSelector(selectCars);
    const showMenu = useSelector(getShowState);
    const menuRef = useRef(null);

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
            </div>
            <div className={cx('right-menu')}>
                <Link to="/">
                    <span>Shop</span>
                </Link>
                <Link to="/">
                    <span>Account</span>
                </Link>
                <button onClick={() => dispatch(setShowState())}>
                    <span>Menu</span>
                </button>
            </div>

            {showMenu && <BurgerNav myRef={menuRef} />}
        </div>
    );
};

export default Header;
