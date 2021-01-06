import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Container, Col, Row, Button, Card, CardHeader } from "reactstrap";

import { Table as TableAntd } from "antd";
// import Header from "components/Headers/Header.js";
import formatDate from "../../utils/index.js";

import { ORDER_ENDPOINT } from "../../constants/endpoint.js";

const END_POINT = ORDER_ENDPOINT;

export default function Orders() {
  const [orders, setOrders] = React.useState([]);

  const fetchData = async (endpoint, setState) => {
    const { data } = await axios.get(endpoint);
    console.log(data);
    setState(data);
  };

  React.useEffect(() => {
    fetchData(END_POINT, setOrders);
  }, []);

  const typeOfPayment = {
    0: "Trực tiếp",
    1: "Online",
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      render: (id) => id.slice(-8),
    },
    {
      title: "Date orders",
      dataIndex: "dateOrder",
      key: "dateOrder",
      render: (date) => formatDate(date),
    },
    {
      title: "Type Of Payment",
      dataIndex: "typePayment",
      key: "typePayment",
      render: (type) => typeOfPayment[type],
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Fee Ship",
      dataIndex: "shipMoney",
      key: "shipMoney",
    },
    {
      title: "Price",
      dataIndex: "intoMoney",
      key: "intoMoney",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "User Name",
      dataIndex: "user",
      key: "name",
      render: (user) => user?.name,
    },
    {
      title: "Email",
      dataIndex: "user",
      key: "email",
      render: (user) => user?.email,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => formatDate(createdAt),
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (updatedAt) => formatDate(updatedAt),
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 80,
      render: (text, order) => (
        <Link to={"/admin/orders/" + order._id}>
          <Button size="sm">View</Button>
        </Link>
      ),
    },
  ];
  return (
    <>
      {/* <Header></Header> */}
      <Container className="mt-10 mb-10" fluid>
        <Row className="mt-10 mb-10">
          <Col className="mt-4 mb-4 ">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Orders</h3>
                  </div>
                </Row>
              </CardHeader>
              <TableAntd
                columns={columns}
                dataSource={orders}
                scroll={{ x: 2000 }}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
