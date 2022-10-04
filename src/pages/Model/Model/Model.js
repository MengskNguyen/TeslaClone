import React from 'react';
import classNames from 'classnames/bind';
import downArrow from '~/assets/images/down-arrow.svg';

import styles from './Model.module.scss';

const cx = classNames.bind(styles);

const Model = ({ title, description, image, range, time, topSpeed, peakPower }) => {
    const background = require(`../../../assets/images/${image}`);
    return (
        <div className={cx('wrapper')} style={{ backgroundImage: `url('${background}')` }}>
            <div className={cx('text')}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
            <div className={cx('info')}>
                <div>
                    <div>
                        {time}
                        <span>mi</span>
                    </div>
                    <p>Range (EPA est.)</p>
                </div>
                <div>
                    <div>
                        {range}
                        <span>s</span>
                    </div>
                    <p>0-60 mph</p>
                </div>
                <div>
                    <div>
                        {topSpeed}
                        <span>s</span>
                    </div>
                    <p>1/4 Mile</p>
                </div>
                <div>
                    <div>
                        {peakPower}
                        <span>hp</span>
                    </div>
                    <p>Peak Power</p>
                </div>
                <button>Order Now</button>
            </div>
            <div className={cx('arrow-container')}>
                <img className={cx('down-arrow')} src={downArrow} alt="down-arrow" />
            </div>
        </div>
    );
};

export default Model;
