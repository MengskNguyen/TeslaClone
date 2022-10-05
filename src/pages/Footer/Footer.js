import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Footer = () => {
    const isHome = window.location.pathname === '/';
    let style = {};
    if (!isHome) {
        style = {
            backgroundColor: 'black',
            color: 'white',
        };
    }

    return (
        <div className={cx('wrapper')} style={style}>
            <Link to="/">
                <p>Tesla © 2022</p>
            </Link>
            <Link to="/">
                <p>Privacy & Legal</p>
            </Link>
            <Link to="/">
                <p>Vehicle Recalls</p>
            </Link>
            <Link to="/">
                <p>Contact</p>
            </Link>
            <Link to="/">
                <p>Careers</p>
            </Link>
            <Link to="/">
                <p>News</p>
            </Link>
            <Link to="/">
                <p>Engage</p>
            </Link>
            <Link to="/">
                <p>Location</p>
            </Link>
        </div>
    );
};

export default Footer;
