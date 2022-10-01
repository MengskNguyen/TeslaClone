import classNames from 'classnames/bind';
import styles from './Section.module.scss';

const cx = classNames.bind(styles);

const Section = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('text')}>
                <h1>Model S</h1>
                <p>Order online for Touchless delivery</p>
            </div>
            <div className={cx('btn-group')}>
                <button className={cx('left-btn')}>Custom Order</button>
                <button className={cx('right-btn')}>Existing Inventory</button>
            </div>
        </div>
    );
};

export default Section;
