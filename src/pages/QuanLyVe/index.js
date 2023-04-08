import './QuanLyVe.css';
import React from 'react';
// import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './search.module.scss';
import images from '~/assets/images';
// import config from '~/config';

// import { DataGridPro } from '@mui/x-data-grid-pro';
// import { DataGridProps } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

//du lieu gia
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

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
            <div className="table">
                <Box sx={{ height: 500, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 9,
                                },
                            },
                        }}
                        pageSizeOptions={[9]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </Box>
            </div>
        </div>
    );
}

export default QuanLyVe;
