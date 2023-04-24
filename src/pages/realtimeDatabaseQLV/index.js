import StartFirebase from '../firebaseConfig/index';
import React from 'react';
import { ref, onValue } from 'firebase/database';
import { Table } from 'react-bootstrap';
import '../realtimeDatabaseQLV/index.scss';
//import images from '~/assets/images';

const dbQLV = StartFirebase();
export class RealtimeDataQLV extends React.Component {
    constructor() {
        super();
        this.state = {
            tableData: [],
        };
    }
    componentDidMount() {
        const dbQLVRef = ref(dbQLV, 'QLV');
        onValue(dbQLVRef, (snapshot) => {
            let records = [];
            snapshot.forEach((childSnapshot) => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({ key: keyName, data: data });
            });
            this.setState({ tableData: records });
        });
    }
    render() {
        return (
            <Table className="table_QLV">
                <thead>
                    <tr>
                        <th className="title_table1">STT</th>
                        <th className="title_table2">Booking code</th>
                        <th className="title_table3">Số vé</th>
                        <th className="title_table4">Tên sự kiện</th>
                        <th className="title_table5">Tình trạng sử dụng</th>
                        <th className="title_table6">Ngày sử dụng </th>
                        <th className="title_table7">Ngày xuất vé</th>
                        <th className="title_table8">Cổng check - in</th>
                        <th className="title_table8"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableData.map((row, index) => {
                        return (
                            <tr>
                                <td>{row.key}</td>
                                <td>{row.data.code}</td>
                                <td>{row.data.number}</td>
                                <td>{row.data.event}</td>
                                <td>{row.data.use}</td>
                                <td>{row.data.dateIN}</td>
                                <td>{row.data.dateOUT}</td>
                                <td>{row.data.gate}</td>
                                <td className="icon_table">{row.data.icon}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        );
    }
}
