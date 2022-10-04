import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

import styles from './Section.module.scss';
import downArrow from '~/assets/images/down-arrow.svg';

const cx = classNames.bind(styles);
const Section = ({ backgroundImg, title, desc, leftBtnTxt, rightBtnTxt }) => {
    const background = require(`../../assets/images/${backgroundImg}`);
    return (
        <div className={cx('wrapper')} style={{ backgroundImage: `url('${background}')` }}>
            <Fade bottom>
                <div className={cx('text')}>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
            </Fade>
            <div className={cx('btn-group')}>
                <div className={cx('btns')}>
                    <Fade left delay="1000">
                        <button className={cx('left-btn')}>{leftBtnTxt}</button>
                    </Fade>
                    <Fade right delay="1000">
                        {rightBtnTxt && <button className={cx('right-btn')}>{rightBtnTxt}</button>}
                    </Fade>
                </div>
                <div className={cx('arrow-container')}>
                    <img className={cx('down-arrow')} src={downArrow} alt="down-arrow" />
                </div>
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
