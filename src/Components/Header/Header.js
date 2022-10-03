import React from 'react';
import classNames from 'classnames/bind';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.scss';
import logo from '~/assets/images/logo.svg';
import carInfo from '~/assets/carInfo.json';

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('wrapper')}>
            <img src={logo} alt="Tesla" />
            <div className={cx('menu')}>
                {carInfo.map((car) => (
                    <a key={car.id} href="https://www.youtube.com/">
                        {car.title}
                    </a>
                ))}
            </div>
            <div className={cx('right-menu')}>
                <a href="https://www.youtube.com/">Shop</a>
                <a href="https://www.youtube.com/">Tesla Account</a>
                <FontAwesomeIcon icon={faBars} className={cx('menu-icon')} />
            </div>
        </div>
    );
};

export default Header;
