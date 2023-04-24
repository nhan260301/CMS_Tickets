import React from 'react';
import './TrangChu.scss';

import images from '~/assets/images';
import { Line, Doughnut } from 'react-chartjs-2';
import {
    Chart as Chartjs,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

Chartjs.register(LineElement, CategoryScale, LinearScale, PointElement, ArcElement, Tooltip, Legend);

function TrangChu() {
    const dataLine = {
        labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'],
        datasets: [
            {
                data: [150, 175, 180, 240, 220, 220, 190],
                backgroundColor: 'transparent',
                borderColor: '#FE9D47',
                pointBorderColor: 'transparent',
                pointBorderWidth: 4,
                tension: 0.5,
            },
        ],
    };

    const optionsLine = {
        plugins: {
            legend: false,
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                min: 140,
                max: 260,
                ticks: {
                    stepSize: 40,
                    callback: (value) => value + 'tr',
                },
                grid: {
                    borderDash: [10],
                },
            },
        },
    };

    const dataPieLeft = {
        labels: false,
        datasets: [
            {
                label: 'Tổng số vé',
                data: [13568, 56024],
                backgroundColor: ['#FE9D47', '#4F75FF'],
                borderColor: ['#FE9D47', '#4F75FF'],
            },
        ],
    };
    const dataPieRight = {
        labels: false,
        datasets: [
            {
                label: 'Tổng số vé',
                data: [28302, 30256],
                backgroundColor: ['#FE9D47', '#4F75FF'],
                borderColor: ['#FE9D47', '#4F75FF'],
            },
        ],
    };

    const optionsPie = {};

    return (
        <div className="container_home">
            <h2 className="home_title">Thống Kê</h2>
            <div className="home_title_top">
                <div className="text">
                    <h3 className="doanhthu">Doanh thu</h3>
                </div>
                <div className="lich">
                    <p className="text_lich">Tháng 4, 2023 </p> <img src={images.celendar} alt="calendar" />
                </div>
            </div>
            <div className="chart_Line">
                <Line data={dataLine} options={optionsLine}></Line>
            </div>
            <div className="home_bottom">
                <div className="text_chart_pie_content">
                    <p className="text_chart_pie_top">Tổng doanh thu theo tuần</p>
                    <div className="sodoanhthu">
                        <h2 className="so">525.145.000</h2> <p className="donvi">đồng</p>
                    </div>
                </div>
                <div className="chart_pie">
                    <div className="text_chart_pie">
                        <div className="lich_bottom">
                            <p className="text_lich">Tháng 4, 2023</p> <img src={images.celendar} alt="calendar" />
                        </div>
                        <div className="text_pie_left">
                            <h3>Gói gia đình</h3>
                        </div>
                        <div className="text_pie_right">
                            <h3>Gói sự kiện</h3>
                        </div>
                    </div>

                    <div className="pie">
                        <div className="pie_left">
                            <Doughnut data={dataPieLeft} options={optionsPie}></Doughnut>
                        </div>
                        <div className="pie_right">
                            <Doughnut data={dataPieRight} options={optionsPie}></Doughnut>
                        </div>
                        <div className="text_note">
                            <div className="note_1">
                                <img src={images.note1} alt="note1" />
                                <p>Vé đã sử dụng</p>
                            </div>
                            <div className="note_2">
                                <img src={images.note2} alt="note2" />
                                <p>Vé chưa sử dụng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrangChu;
