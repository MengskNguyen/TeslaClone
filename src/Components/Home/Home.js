import React from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Section from '~/Components/Section';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div className={cx('wrapper')}>
            <Section />
        </div>
    );
};

export default Home;
