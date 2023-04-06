import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';
import config from '~/config';
import images from '~/assets/images';
const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <NavLink className={(nav) => cx('home', { active: nav.isActive })} to={config.routes.home}>
                <div className={cx('home')}>
                    <img src={images.home} alt="home" />
                    <p>Trang chủ</p>
                </div>
            </NavLink>
            <NavLink className={(nav) => cx('ticket', { active: nav.isActive })} to={config.routes.quanlyve}>
                <div className={cx('ticket')}>
                    <img src={images.ticket} alt="ticket" />
                    <p>Quản lý vé</p>
                </div>
            </NavLink>
            <NavLink className={(nav) => cx('check_ticket', { active: nav.isActive })} to={config.routes.doisoatve}>
                <div className={cx('check_ticket')}>
                    <img src={images.check_ticket} alt="check_ticket" />
                    <p>Đối soát vé</p>
                </div>
            </NavLink>
            <NavLink className={(nav) => cx('list', { active: nav.isActive })} to={config.routes.danhsachsukien}>
                <div className={cx('list')}>
                    <img src={images.list} alt="list" />
                    <p>Danh sách sự kiện</p>
                </div>
            </NavLink>
            <NavLink className={(nav) => cx('desktop', { active: nav.isActive })} to={config.routes.quanlythietbi}>
                <div className={cx('desktop')}>
                    <img src={images.desktop} alt="desktop" />
                    <p>Quản lý thiết bị</p>
                </div>
            </NavLink>
            <NavLink className={(nav) => cx('setting', { active: nav.isActive })} to={config.routes.caidat}>
                <div className={cx('setting')}>
                    <img src={images.setting} alt="setting" />
                    <p>Cài đặt</p>
                </div>
            </NavLink>
            <NavLink className={(nav) => cx('setting', { active: nav.isActive })} to={config.routes.goidichvu}>
                <div className={cx('service')}>
                    <p>Gói dịch vụ</p>
                </div>
            </NavLink>

            <div className={cx('footer')}>
                <p>Copyright</p>
                <img src={images.copy} alt="copyright" />
                <p>2020 Alta Software </p>
            </div>
        </aside>
    );
}

export default Sidebar;
