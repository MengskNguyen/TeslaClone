import React from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Section from '~/Components/Section';

const cx = classNames.bind(styles);

const Home = () => {
    return (
        <div className={cx('wrapper')}>
            <Section
                backgroundImg="model-s.jpg"
                title="Model S"
                desc="Order Online for Touchless Delivery"
                leftBtnTxt="Custom Order"
                rightBtnTxt="Existing Inventory"
            />
            <Section
                backgroundImg="model-3.jpg"
                title="Model 3"
                desc="Order Online for Touchless Delivery"
                leftBtnTxt="Custom Order"
                rightBtnTxt="Existing Inventory"
            />
            <Section
                backgroundImg="model-y.jpg"
                title="Model Y"
                desc="Order Online for Touchless Delivery"
                leftBtnTxt="Custom Order"
                rightBtnTxt="Existing Inventory"
            />
            <Section
                backgroundImg="model-x.jpg"
                title="Model X"
                desc="Order Online for Touchless Delivery"
                leftBtnTxt="Custom Order"
                rightBtnTxt="Existing Inventory"
            />
            <Section
                backgroundImg="solar-panel.jpg"
                title="Lowest Cost Solar Panels in America"
                desc="Money-back guarantee"
                leftBtnTxt="Order Now"
                rightBtnTxt="Learn More"
            />
            <Section
                backgroundImg="solar-roof.jpg"
                title="Solar for New Roofs"
                desc="Solar Roof Cost Less Than a New Roof Plus Solar Panels"
                leftBtnTxt="Order Now"
                rightBtnTxt="Learn More"
            />
            <Section backgroundImg="accessories.jpg" title="Accessories" leftBtnTxt="Shop now" noDownArrow />
        </div>
    );
};

export default Home;
