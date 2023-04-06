import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import config from '~/config';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home}>
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="logo" />
                    </div>
                </Link>
                <div className={cx('search')}>
                    <input placeholder="Search..." spellCheck={false}></input>
                    <button className={cx('search-btn')}>
                        <img src={images.search} alt="search" />
                    </button>
                </div>
                <div className={cx('actions')}>
                    <div className={cx('logo-mail')}>
                        <img src={images.mail} alt="mail" />
                    </div>
                    <div className={cx('logo-bell')}>
                        <img src={images.bell} alt="bell" />
                    </div>
                    <div className={cx('account')}>
                        <img src={images.account} alt="account" />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
