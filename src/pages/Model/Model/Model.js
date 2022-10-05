import React from 'react';
import classNames from 'classnames/bind';
import Fade from 'react-reveal/Fade';

import styles from './Model.module.scss';
import Footer from '~/pages/Footer';

const cx = classNames.bind(styles);

const Model = ({ title, description, image, range, time, topSpeed, peakPower }) => {
    const background = require(`../../../assets/images/${image}`);
    const interiorBG = require(`../../../assets/images/new-Interior.jpeg`);
    const connected = require('../../../assets/images/connected.jpg');
    const audio = require('../../../assets/images/audio.jpg');
    const game = require('../../../assets/images/game.jpg');

    return (
        <div className={cx('wrapper')}>
            <div className={cx('section')} style={{ backgroundImage: `url('${background}')` }}>
                <div className={cx('text')}>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className={cx('info')}>
                    <Fade bottom>
                        <div>
                            <div>
                                {time}
                                <span>mi</span>
                            </div>
                            <p>Range (EPA est.)</p>
                        </div>
                    </Fade>
                    <Fade bottom delay={100}>
                        <div>
                            <div>
                                {range}
                                <span>s</span>
                            </div>
                            <p>0-60 mph</p>
                        </div>
                    </Fade>
                    <Fade bottom delay={200}>
                        <div>
                            <div>
                                {topSpeed}
                                <span>s</span>
                            </div>
                            <p>1/4 Mile</p>
                        </div>
                    </Fade>
                    <Fade bottom delay={300}>
                        <div>
                            <div>
                                {peakPower}
                                <span>hp</span>
                            </div>
                            <p>Peak Power</p>
                        </div>
                    </Fade>
                    <Fade bottom delay={400}>
                        <button>
                            <span>Order Now</span>
                        </button>
                    </Fade>
                </div>
            </div>

            <div className={cx('sub-section')}>
                <div className={cx('title')}>
                    <div className={cx('topBG')}></div>
                    <div className={cx('text-Wrap')}>
                        <Fade bottom>
                            <span>Interior of the Future</span>
                        </Fade>
                    </div>
                    <div className={cx('bottomBG')}></div>
                </div>
                <div className={cx('section')} style={{ backgroundImage: `url('${interiorBG}')` }}></div>
            </div>
            <div className={cx('sm-section-container')}>
                <Fade bottom distance="50%">
                    <div className={cx('sm-section')}>
                        <div className={cx('sm-section-img')}>
                            <img src={connected} alt="connected" />
                        </div>
                        <div className={cx('sm-section-text')}>
                            <div className={cx('sm-section-content')} style={{ paddingLeft: '140px' }}>
                                <h3>Stay Connected</h3>
                                <p>
                                    Instantly connect with multi-device Bluetooth, or fast charge devices with wireless
                                    and 36-watt USB-C charging.
                                </p>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Fade bottom distance="50%">
                    <div className={cx('sm-section')}>
                        <div className={cx('sm-section-text')}>
                            <div className={cx('sm-section-content')} style={{ paddingRight: '140px' }}>
                                <h3>Your Best Audio System</h3>
                                <p>
                                    A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers the best
                                    listening experience wherever you are.
                                </p>
                            </div>
                        </div>
                        <div className={cx('sm-section-img')}>
                            <img src={audio} alt="audio" />
                        </div>
                    </div>
                </Fade>
                <Fade bottom distance="50%">
                    <div className={cx('sm-section')}>
                        <div className={cx('sm-section-img')}>
                            <img src={game} alt="game" />
                        </div>
                        <div className={cx('sm-section-text')}>
                            <div className={cx('sm-section-content')} style={{ paddingLeft: '140px' }}>
                                <h3>Wireless Gaming</h3>
                                <p>
                                    Up to 10 teraflops of processing power enables in-car gaming on-par with today’s
                                    newest consoles. Wireless controller compatibility lets you game from any seat.
                                </p>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
            <Footer />
        </div>
    );
};

export default Model;
