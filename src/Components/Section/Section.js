import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Section.module.scss';
import downArrow from '~/assets/images/down-arrow.svg';

const cx = classNames.bind(styles);
const Section = ({ backgroundImg, title, desc, leftBtnTxt, rightBtnTxt }) => {
    const background = require(`../../assets/images/${backgroundImg}`);
    return (
        <div className={cx('wrapper')} style={{ backgroundImage: `url('${background}')` }}>
            <div className={cx('text')}>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            <div className={cx('btn-group')}>
                <div className={cx('btns')}>
                    <button className={cx('left-btn')}>{leftBtnTxt}</button>
                    {rightBtnTxt && <button className={cx('right-btn')}>{rightBtnTxt}</button>}
                </div>
                <img className={cx('down-arrow')} src={downArrow} alt="down-arrow" />
            </div>
        </div>
    );
};

Section.propTypes = {
    backgroundImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    leftBtnTxt: PropTypes.string,
    rightBtnTxt: PropTypes.string,
};

export default Section;
