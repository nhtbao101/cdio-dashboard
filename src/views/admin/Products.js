import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Col, Row, Button, Card, CardHeader } from "reactstrap";
import {
  message,
  Popconfirm,
  Table as TableAntd,
  Button as ButtonAntd,
} from "antd";
import { PRODUCT_ENDPOINT } from "../../constants/endpoint";

import formatDate from "../../utils/index.js";

const END_POINT = PRODUCT_ENDPOINT;

export default function Products() {
  const [products, setProducts] = React.useState([]);

  const fetchData = async (endpoint, setState) => {
    const { data } = await axios.get(endpoint);
    console.log(endpoint, data);
    setState(data);
  };

  const fetchProduct = async (endpoint, setState) => {
    const {
      data: { products },
    } = await axios.get(endpoint);
    console.log("Products", products);
    setState(products);
  };

  React.useEffect(() => {
    fetchProduct(PRODUCT_ENDPOINT, setProducts);
  }, []);

  React.useEffect(() => {
    console.log("Re-render");
  });

  const confirmDelete = (id) => {
    axios
      .delete(END_POINT + id)
      .then((res) => {
        console.log(res);
        fetchData();
        message.success("Delete successful.");
      })
      .catch((err) => {
        console.log(err);
        message.error("Delete failed.");
      });
  };

  const cancel = (e) => {};

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      render: (id) => <Link to={"/admin/products/" + id}>{id.slice(-8)}</Link>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Sold",
      dataIndex: "sold",
      key: "sold",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Style",
      dataIndex: "style",
      key: "style",
      render: (style) => style.name,
    },
    {
      title: "Material",
      dataIndex: "material",
      key: "material",
      render: (material) => material.name,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category) => category.name,
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
      render: (text, product) => (
        <Popconfirm
          title="Are you sure to delete this product?"
          onConfirm={() => confirmDelete(product._id)}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <ButtonAntd type="primary" danger>
            Delete
          </ButtonAntd>
        </Popconfirm>
      ),
    },
  ];

  return (
    <>
      <Container className="mt-10 mb-10" fluid>
        <Row className="mt-10 mb-10">
          <Col className="mt-4 mb-4 ">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Products</h3>
                  </div>
                  <div className="col text-right">
                    <Link to="/admin/products/create">
                      <Button color="primary" size="sm">
                        Create
                      </Button>
                    </Link>
                  </div>
                </Row>
              </CardHeader>
              <TableAntd
                columns={columns}
                dataSource={products}
                scroll={{ x: 1300 }}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
