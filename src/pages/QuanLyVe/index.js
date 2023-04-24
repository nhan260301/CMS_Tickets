import './QuanLyVe.scss';
import React from 'react';
import { RealtimeDataQLV } from '../realtimeDatabaseQLV/index';
import classNames from 'classnames/bind';
import styles from './search.module.scss';
import images from '~/assets/images';

//import 'bootstrap/dist/css/bootstrap.min.css';

const cx = classNames.bind(styles);

function QuanLyVe() {
    return (
        <div className="container">
            <h2 className="title">Danh sách vé</h2>
            <div className="search_bar">
                <div className={cx('search')}>
                    <input placeholder="Tìm bằng số vé" spellCheck={false}></input>
                    <button className={cx('search-btn')}>
                        <img src={images.search} alt="search" />
                    </button>
                </div>
                <div className="box">
                    <div className="box_loc_ve">
                        <div className="icon"></div>
                        <img src={images.funnel} alt="funnel" /> <p>Lọc vé</p>
                    </div>
                    <div className="box_xuat_file">
                        <p>Xuất file (.csv)</p>
                    </div>
                </div>
            </div>
            <div className="table_databaseQLV">
                <RealtimeDataQLV />
            </div>
            <div className="footer_tableQLV">
                <div className="previous_page">
                    <img src={images.previous_page} alt="previous_page" />
                </div>
                <div className="nb_page">
                    <div className="page1">1</div>
                    <div className="page2">2</div>
                    <div className="page3">3</div>
                    <div className="page4">4</div>
                    <div className="page5">5</div>
                    <div className="page_vv">...</div>
                    <div className="page20">20</div>
                </div>
                <div className="next_page">
                    <img src={images.next_page} alt="next_page" />
                </div>
            </div>
        </div>
    );
}

export default QuanLyVe;
