import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchTickets } from "../../store/actions/ticketFamilyActions";
import FilterModal from "../modal/FilterModal";
import { Popover, Table } from "antd";
import db from "../../firebase/config";
import ChangeDateUse from "../modal/ChangeDateUse";
import moment from "moment";

const ComboFamily = ({ ticketData, fetchTickets }: any) => {
  const [dataFamily, setDataFamily] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [ticketDateData, setTicketDateData] = useState({});

  const ref = db.collection("ticket");
  const filterStatus = (status: String) => {
    ref.where("status", "==", status).onSnapshot((querySnapshot) => {
      const tickets: any = [];
      querySnapshot.forEach((doc) => {
        tickets.push(doc.data());
      });
      setDataFamily(tickets);
    });
  };

  const statusValue = (status: any) => {
    if (status !== "") {
      filterStatus(status);
    } else {
      setDataFamily(ticketData.tickets);
    }
  };

  const handleOpen = () => {
    setIsOpenModal(true);
  };

  const content = (
    <div className="change-ticket">
      <div>Sử dụng vé</div>
      <div onClick={() => handleOpen()}>Đổi ngày sử dụng</div>
      {isOpenModal && isOpenModal === true ? (
        <ChangeDateUse
          show={isOpenModal}
          onHideDateUse={() => setIsOpenModal(false)}
          ticketDateData={ticketDateData}
        />
      ) : (
        ""
      )}
    </div>
  );

  const handleGetDataTicket = (ticketData: any) => {
    setTicketDateData(ticketData);
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  useEffect(() => {
    setDataFamily(ticketData.tickets);
  }, [ticketData.tickets]);
  return (
    <div className="body-content">
      <div className="body-title">
        <div className="search">
          <input type="text" placeholder="Tìm bằng số vé" />
          <i className="fas fa-search"></i>
        </div>
        <div className="filter-container">
          <div className="filter" onClick={() => setModalShow(true)}>
            <i className="fas fa-filter"></i>Lọc
          </div>
          {modalShow && modalShow === true ? (
            <FilterModal
              show={modalShow}
              onHideFilter={() => setModalShow(false)}
              statusValue={statusValue}
            />
          ) : (
            ""
          )}

          <div className="export">Xuất file(.csv)</div>
        </div>
      </div>
      <div className="body-table">
        <Table
          dataSource={dataFamily}
          pagination={{ pageSize: 8, position: ["bottomCenter"] }}
          rowKey="id"
        >
          <Table.Column
            title="STT"
            dataIndex="id"
            key="id"
            render={(text: any, record: any, index: any) => (
              <div>{index + 1}</div>
            )}
          />

          <Table.Column
            title="Booking Code"
            dataIndex="bookingcode"
            key="bookingcode"
            render={(text: any) => <div>{text}</div>}
          />

          <Table.Column
            title="Số vé"
            dataIndex="ticketId"
            key="ticketId"
            render={(text: any) => <div>{text}</div>}
          />

          <Table.Column
            title="Tình trạng sử dụng"
            dataIndex="status"
            key="status"
            render={(text: any) => (
              <div
                className={
                  text && text === "Chưa sử dụng"
                    ? "unused"
                    : text === "Đã sử dụng"
                    ? "used"
                    : "expired"
                }
              >
                <i className="fas fa-circle"></i>
                {text}
              </div>
            )}
          />

          <Table.Column
            title="Ngày sử dụng"
            dataIndex="ticketDate"
            key="ticketDate"
            render={(text: any) => (
              <div>{moment(text.toDate()).format("DD/MM/YYYY")}</div>
            )}
          />

          <Table.Column
            title="Ngày xuất vé"
            dataIndex="ticketReleaseDate"
            key="ticketReleaseDate"
            render={(text: any) => (
              <div>{moment(text.toDate()).format("DD/MM/YYYY")}</div>
            )}
          />

          <Table.Column
            title="Cổng Check-in"
            dataIndex="checkin"
            key="checkin"
            render={(text: any) => <div>{text}</div>}
          />

          <Table.Column
            key="id"
            dataIndex="status"
            render={(text: any, item: any) => (
              <div>
                {text && text === "Chưa sử dụng" ? (
                  <Popover
                    content={content}
                    trigger="click"
                    placement="left"
                    overlayInnerStyle={{
                      background: "#ffd2a8",
                      borderRadius: "8px",
                      width: "159px",
                      height: "59px",
                    }}
                  >
                    <div onClick={() => handleGetDataTicket(item)}>
                      <i className="fas fa-ellipsis-v"></i>
                    </div>
                  </Popover>
                ) : (
                  ""
                )}
              </div>
            )}
          />
        </Table>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    ticketData: state.ticket,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchTickets: () => dispatch(fetchTickets()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComboFamily);
