import React from 'react';
import styles from './search.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import './search.module.scss';
import './GoiDichVu.css';

const cx = classNames.bind(styles);

function GoiDichVu() {
    return (
        <div className="contaniner_GDV">
            <h2 className="title">Danh sách gói vé</h2>
            <div className="search_bar">
                <div className={cx('search')}>
                    <input placeholder="Tìm bằng số vé" spellCheck={false}></input>
                    <button className={cx('search-btn')}>
                        <img src={images.search} alt="search" />
                    </button>
                </div>
                <div className="box">
                    <div className="box_xuat_file">
                        <p>Xuất file (.csv)</p>
                    </div>
                    <div className="box_them_goive">
                        <p>Thêm gói vé</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GoiDichVu;
