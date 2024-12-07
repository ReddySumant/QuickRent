import React from 'react';
import { Container, Row, Col, Card, Image, Badge } from 'react-bootstrap';

const OrderPage = ({
  productImage,
  productTitle,
  brandName,
  modelName,
  sellerName,
  orderNumber,
  orderDate,
  rentalDuration,
  renterName,
  renterEmail,
  renterPhone,
  address,
  sellerFullName,
}) => {
  return (
    <Container fluid className="mt-5 mb-5">
      <Card className="shadow border-0">
        <Card.Body>
          {/* Header Section */}
          <Row className="text-center mb-4">
            <Col>
              <div className="d-flex align-items-center justify-content-center">
                <span
                  className="text-success"
                  style={{ fontSize: '2rem', marginRight: '10px' }}
                >
                  ✔
                </span>
                <h2 className="text-primary fw-bold">Congratulations!</h2>
              </div>
              <p className="text-muted fs-5">Your Order Has Been Placed Successfully</p>
            </Col>
          </Row>

          {/* Product and Order Details */}
          <Row className="align-items-center mb-4" >
            <Col md={4} className="text-center">
              <Image src={productImage} alt="Product" fluid className="rounded shadow-sm" />
            </Col>
            <Col md={4}>
              <h5 className="fw-bold text-dark">{productTitle}</h5>
              <p className="mb-1">
                <Badge bg="info" className="me-1">
                  Brand
                </Badge>
                {brandName}
              </p>
              <p className="mb-1">
                <Badge bg="secondary" className="me-1">
                  Model
                </Badge>
                {modelName}
              </p>
              <p className="text-muted">
                <span className="fw-bold">Sold by:</span> {sellerName}
              </p>
            </Col>
            <Col md={4} className="text-muted">
              <h5 className="fw-bold">Order Details</h5>
              <p>
                <span className="fw-bold">Order Number:</span> {orderNumber}
              </p>
              <p>
                <span className="fw-bold">Placed On:</span> {orderDate}
              </p>
              <p>
                <span className="fw-bold">Duration:</span>{' '}
                {rentalDuration.from} - {rentalDuration.to}
              </p>
            </Col>
          </Row>
          <hr />

          {/* Renter and Address Details */}
          <Row className="align-items-center mt-4 mx-5" style={{textAlign:'center'}}>
            <Col md={4} className="text-muted mb-3">
              <h6 className="fw-bold">Rented By:</h6>
              <p className="mb-1">{renterName}</p>
              <p className="mb-1">{renterEmail}</p>
              <p>{renterPhone}</p>
            </Col>
            <Col md={4} className="text-muted mb-3">
              <h6 className="fw-bold">Address:</h6>
              <p>{address}</p>
            </Col>
            <Col md={4} className="text-muted">
              <h6 className="fw-bold">Rented By Seller:</h6>
              <p>{sellerFullName}</p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OrderPage;