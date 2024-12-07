import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaCalendarAlt, FaStore } from 'react-icons/fa';
import washingMachineImage from '../assets/images/washing-machine.jpg';
import sofaSetImage from '../assets/images/sofa-set.jpg';
import diningTableImage from '../assets/images/dining-table.jpg';
import airPurifierImage from '../assets/images/air-purifier.jpeg';
import MainNavbar from './MainNavbar';
import Footer from './Footer';

function Orders() {
  const [search, setSearch] = useState("");

  const orders = [
    {
      id: 1,
      productName: 'Washing Machine',
      description: 'Front Load, 7kg Capacity',
      startDate: '2024-03-01',
      returnDate: '2024-03-15',
      seller: 'Home Appliances Store',
      image: washingMachineImage
    },
    {
      id: 2,
      productName: 'Sofa Set',
      description: '3-Seater, Grey Color',
      startDate: '2024-03-05',
      returnDate: '2024-04-05',
      seller: 'Furniture World',
      image: sofaSetImage
    },
    {
      id: 3,
      productName: 'Dining Table',
      description: 'Built to last with premium wood, perfect for family gatherings',
      startDate: '2024-03-01',
      returnDate: '2024-05-01',
      seller: 'Furniture Worlds',
      image: diningTableImage
    },
    {
      id: 4,
      productName: 'Air purifier',
      description: ' Clean Air Delivery Rate (CADR) of250m³/h,it effectively removes airborne particles for healthier breathing.',
      startDate: '2024-03-05',
      returnDate: '2024-05-05',
      seller: 'Home Appliances Store',
      image: airPurifierImage
    }
  ];

  const filteredOrders = orders.filter(order =>
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


      <Row>
        {filteredOrders.map(order => (
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
                    <Card.Title className="h5 mb-3">{order.productName}</Card.Title>
                    <Card.Text className="text-muted mb-3">{order.description}</Card.Text>
                    <div className="mt-auto">
                      <p className="mb-2">
                        <FaCalendarAlt className="me-2 text-primary" />
                        <small>Start: {order.startDate}</small>
                      </p>
                      <p className="mb-2">
                        <FaCalendarAlt className="me-2 text-danger" />
                        <small>Return: {order.returnDate}</small>
                      </p>
                      <p className="mb-0">
                        <FaStore className="me-2 text-success" />
                        <small>{order.seller}</small>
                      </p>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
      <Footer />
    </div>
    
  );
}

export default Orders;