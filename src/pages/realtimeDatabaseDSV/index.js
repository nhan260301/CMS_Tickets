import StartFirebase from '../firebaseConfig/index';
import React from 'react';
import { ref, onValue } from 'firebase/database';
import { Table } from 'react-bootstrap';
import '../realtimeDatabaseDSV/index.scss';
//import images from '~/assets/images';

const dbDSV = StartFirebase();
export class RealtimeDataDSV extends React.Component {
    constructor() {
        super();
        this.state = {
            tableData: [],
        };
    }
    componentDidMount() {
        const dbDSVRef = ref(dbDSV, 'DSV');
        onValue(dbDSVRef, (snapshot) => {
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
            <Table className="table_DSV">
                <thead>
                    <tr>
                        <th className="title_table1">STT</th>
                        <th className="title_table2">Số vé</th>
                        <th className="title_table3">Ngày sử dụng</th>
                        <th className="title_table4">Tên loại vé</th>
                        <th className="title_table5">Cổng check - in</th>
                        <th className="title_table6"></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableData.map((row, index) => {
                        return (
                            <tr>
                                <td>{row.key}</td>

                                <td>{row.data.number}</td>
                                <td>{row.data.dateUSE}</td>
                                <td>{row.data.type}</td>
                                <td>{row.data.gate}</td>
                                <td>{row.data.check}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        );
    }
}
