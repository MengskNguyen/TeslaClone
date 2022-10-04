import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

import styles from './Section.module.scss';
import downArrow from '~/assets/images/down-arrow.svg';
import 'animate.css';

const cx = classNames.bind(styles);
const Section = ({ backgroundImg, title, desc, leftBtnTxt, rightBtnTxt, noDownArrow = false }) => {
    const background = require(`../../assets/images/${backgroundImg}`);
    return (
        <div className={cx('wrapper')} style={{ backgroundImage: `url('${background}')` }}>
            <Reveal effect="animate__fadeInUp">
                <div className={cx('text')}>
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
            </Reveal>
            <div className={cx('btn-group')}>
                <div className={cx('btns')}>
                    {rightBtnTxt ? (
                        <Fade left delay="800">
                            <button className={cx('left-btn')}>{leftBtnTxt}</button>
                        </Fade>
                    ) : (
                        <Fade bottom delay="800">
                            <button className={cx('left-btn')}>{leftBtnTxt}</button>
                        </Fade>
                    )}

                    <Fade right delay="800">
                        {rightBtnTxt && <button className={cx('right-btn')}>{rightBtnTxt}</button>}
                    </Fade>
                </div>
                {!noDownArrow && (
                    <div className={cx('arrow-container')}>
                        <img className={cx('down-arrow')} src={downArrow} alt="down-arrow" />
                    </div>
                )}
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
