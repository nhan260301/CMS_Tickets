import React from 'react';
import './TrangChu.css';
//import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

import { Line } from 'react-chartjs-2';
import { Chart as Chartjs, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

Chartjs.register(LineElement, CategoryScale, LinearScale, PointElement);

function TrangChu() {
    const dataLine = {
        labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'],
        datasets: [
            {
                data: [150, 170, 170, 140, 220, 230, 200, 195],
                backgroundColor: 'transparent',
                borderColor: '#f26c6d',
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
    return (
        <div className="container_home">
            <h2 className="home_title">Thống Kê</h2>
            <div className="home_title_top">
                <div className="text">
                    <h3 className="doanhthu">Doanh thu</h3>
                </div>
                <div className="lich">
                    <p>Tháng 4, 2023</p>
                    {/* <CalendarMonthOutlinedIcon /> */}
                </div>
            </div>
            <div className="chart_Line">
                <Line data={dataLine} options={optionsLine}></Line>
            </div>
            <div className="chart_pie">
                <div className="text_chart_pie">
                    <div className="text_sodoanhthu">
                        <p>Tổng doanh thu theo tuần</p>
                    </div>
                    <div className="sodoanhthu">
                        <h2>525.145.000</h2> <p>đồng</p>
                    </div>
                </div>
                <div className="chart_pie">
                    <div className="text_chart_pie">
                        <div className="lich_bottom">
                            <p>Tháng 4, 2023</p>
                        </div>
                        <div className="text_pie_left">
                            <h3>Gói gia đình</h3>
                        </div>
                        <div className="text_pie_right">
                            <h3>Gói sự kiện</h3>
                        </div>
                    </div>
                    <div className="pie_left"> </div>
                    <div className="pie_right"> </div>
                    <div className="chuthich">
                        <div className="chuthich_1">
                            <p>Vé đã sử dụng</p>
                        </div>
                        <div className="chuthich_2">
                            <p>Vé chưa sử dụng</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrangChu;
