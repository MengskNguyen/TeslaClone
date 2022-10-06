import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import classNames from 'classnames/bind';

import videos from '~/assets/videos.json';
import styles from './VidCarousel.module.scss';

const cx = classNames.bind(styles);

const VidCarousel = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let idTimeOut = setTimeout(() => {
            return index !== videos.length - 1 ? setIndex((prev) => prev + 1) : setIndex(0);
        }, videos[index].duration);
        return () => clearTimeout(idTimeOut);
    }, [index]);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} indicators={false} onSelect={handleSelect}>
                {videos.map((video) => {
                    return (
                        <Carousel.Item key={video.id} className={cx('carousel-wrapper')}>
                            <div className={cx('carousel-video-container')}>
                                <video loop={true} autoPlay={true}>
                                    <source src={require(`../../assets/videos/${video.path}`)} type="video/mp4" />
                                </video>
                            </div>
                            <div className={cx('carousel-caption-container')}>
                                <div className={cx('caption-wrapper')}>
                                    <h4>{video.title}</h4>
                                    <p>{video.desc}</p>
                                </div>
                            </div>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default VidCarousel;
