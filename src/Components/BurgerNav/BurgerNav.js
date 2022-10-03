import classNames from 'classnames/bind';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setShowState, getShowState } from '~/features/burgerNav/burgerNavSlice';

import styles from './BurgerNav.module.scss';

const cx = classNames.bind(styles);

const BurgerNav = () => {
    const dispatch = useDispatch();
    const showMenu = useSelector(getShowState);

    return (
        <Fade right when={showMenu}>
            {showMenu && (
                <div className={cx('wrapper')}>
                    <div className={cx('close-wrapper')}>
                        <FontAwesomeIcon
                            onClick={() => dispatch(setShowState())}
                            className={cx('close-btn')}
                            icon={faXmark}
                        />
                    </div>
                    <li>
                        <a href="https://www.youtube.com/">Existing inventory</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/">Used inventory</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/">Trade-in</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/">Cyberstruck</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/">Roadaster</a>
                    </li>
                </div>
            )}
        </Fade>
    );
};

export default BurgerNav;
