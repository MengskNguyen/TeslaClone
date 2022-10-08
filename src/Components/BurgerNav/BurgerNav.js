import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setShowState, getShowState } from '~/features/burgerNav/burgerNavSlice';
import { Link } from 'react-router-dom';

import styles from './BurgerNav.module.scss';

const cx = classNames.bind(styles);

const BurgerNav = ({ myRef }) => {
    const dispatch = useDispatch();
    const showMenu = useSelector(getShowState);

    useEffect(() => {
        let handler = (e) => {
            if (showMenu && myRef.current && !myRef.current.contains(e.target)) {
                dispatch(setShowState());
            }
        };
        window.addEventListener('mousedown', handler);

        return () => {
            console.log('Remove event');
            document.removeEventListener('mousedown', handler);
        };
    }, [showMenu, dispatch, myRef]);

    return (
        <div ref={myRef} className={cx('wrapper')}>
            <div className={cx('close-wrapper')}>
                <FontAwesomeIcon onClick={() => dispatch(setShowState())} className={cx('close-btn')} icon={faXmark} />
            </div>
            <li>
                <Link to="/">Existing inventory</Link>
            </li>
            <li>
                <Link to="/">Used inventory</Link>
            </li>
            <li>
                <Link to="/">Trade-in</Link>
            </li>
            <li>
                <Link to="/">Cyberstruck</Link>
            </li>
            <li>
                <Link to="/">Roadaster</Link>
            </li>
        </div>
    );
};

export default BurgerNav;
