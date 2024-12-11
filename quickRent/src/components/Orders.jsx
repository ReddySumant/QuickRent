import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaCalendarAlt, FaStore } from "react-icons/fa";
import MainNavbar from "./MainNavbar";
import Footer from "./Footer";
import axios from "axios";

function Orders() {
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState([]); // State to store fetched orders
  const [loading, setLoading] = useState(true); // State to handle loading

  // Fetch orders from backend API
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/order/user/1"
        ); // Update API URL
        setOrders(response.data); // Store the response data in state
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching orders:", error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Filter orders based on search input
  const filteredOrders = orders.filter(
    (order) =>
      order.productName.toLowerCase().includes(search.toLowerCase()) ||
      order.seller.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <MainNavbar />
      <div className="profile-header mb-4">
        <h1 className="mb-0">
          <FaStore className="me-2" />
          My Orders
        </h1>
      </div>

      <input
        type="text"
        placeholder="Search orders..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control mb-4"
      />

      {loading ? (
        <p>Loading orders...</p> // Show a loading message while data is fetched
      ) : (
        <Row>
          {filteredOrders.map((order) => (
            <Col key={order.id} xs={12} md={3} className="mb-4">
              <Card className="order-card">
                <Row className="g-0">
                  <Col xs={12} sm={4}>
                    <img
                      src={order.image}
                      className="order-image"
                      alt={order.productName}
                    />
                  </Col>
                  <Col xs={12} sm={8}>
                    <Card.Body>
                      <Card.Title className="h5 mb-3">
                        {order.productName}
                      </Card.Title>
                      <Card.Text className="text-muted mb-3">
                        {order.description}
                      </Card.Text>
                      <div className="mt-auto">
                        <p className="mb-2">
                          <FaCalendarAlt className="me-2 text-primary" />
                          <small>Start: {order.startDate}</small>
                        </p>
                        <p className="mb-2">
                          <FaCalendarAlt className="me-2 text-danger" />
                          <small>Return: {order.endDate}</small>
                        </p>
                        <p className="mb-0">
                          <FaStore className="me-2 text-success" />
                          <small>{order.userName}</small>
                        </p>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <Footer />
    </div>
  );
}

export default Orders;
