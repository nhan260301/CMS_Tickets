import React, { useEffect, useState } from 'react';
import './DoiSoatVe.scss';
import images from '~/assets/images';
import styles from './search.module.scss';
import classNames from 'classnames/bind';
import { RealtimeDataDSV } from '../realtimeDatabaseDSV';
const selectData = [{ name: 'Đã đối soát' }, { name: 'Chưa đối soát' }];
const cx = classNames.bind(styles);

function DoiSoatVe() {
    const [selects, setSelect] = useState([]);
    useEffect(() => {
        setSelect(selectData);
    }, []);
    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name === 'allSelect') {
            let tempSelect = selects.map((select) => {
                return { ...select, isChecked: checked };
            });
            setSelect(tempSelect);
        } else {
            let tempSelect = selects.map((select) =>
                select.name === name ? { ...select, isChecked: checked } : select,
            );
            setSelect(tempSelect);
        }
    };
    return (
        <>
            <div className="container_DSV">
                <div className="content">
                    <div className="content_DSV_Left">
                        <h2 className="DSV_title_left">Đối Soát Vé</h2>
                        <div className="search_bar_DSV">
                            <div className={cx('search')}>
                                <input placeholder="Tìm bằng số vé" spellCheck={false}></input>
                                <button className={cx('search-btn')}>
                                    <img src={images.search} alt="search" />
                                </button>
                            </div>
                            <div className="box_DSV">
                                <div className="box_chotDS">
                                    <p>Chốt đối soát</p>
                                </div>
                            </div>
                        </div>
                        <div className="table_databaseDSV">
                            <RealtimeDataDSV />
                        </div>
                        <div className="footer_tableDSV">
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
                </div>
                <div className="content_DSV_Right">
                    <h3 className="DSV_title_right">Lọc Vé</h3>
                    <div className="tinhtrangDS">
                        <p className="text_ttDS">Tình trạng đối soát</p>
                        <div className="select_ttDS">
                            <div className="form_check">
                                <input
                                    type="checkbox"
                                    className="form_check_input"
                                    name="allSelect"
                                    checked={selects.filter((select) => select?.isChecked !== true).length < 1}
                                    onChange={handleChange}
                                />
                                <label className="form_check_lable">Tất cả</label>
                            </div>
                            {selects.map((select) => (
                                <div className="form_check">
                                    <input
                                        type="checkbox"
                                        className="form_check_input"
                                        name={select.name}
                                        checked={select?.isChecked || false}
                                        onChange={handleChange}
                                    />
                                    <label className="form_check_lable">{select.name}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="loaive_DSV">
                        <p>Loại vé</p>
                        <p>Vé cổng</p>
                    </div>
                    <div className="from_Date">
                        <p>Từ ngày</p>
                    </div>
                    <div className="to_Date">
                        <p>Đến ngày</p>
                    </div>
                    <div className="reSize_btn">
                        <div className="btn_Loc">
                            <p className="text_btn_Loc">Lọc</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DoiSoatVe;
