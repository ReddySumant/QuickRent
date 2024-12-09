import React from "react";
import { Container, Card, CardBody, Row, Col, Carousel, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

const ProductDescription = () => {
  const product = {
    title: "A1S Cushioned Lounge Chair",
    company: "Green Soul",
    model: "Amaze Series",
    description:
      "A stylish, modern, and comfortable chair offering exceptional quality, exceeding expectations with its delightful design and premium craftsmanship.",
    specifications: [
      'Style and Modern',
      'Quality and very comfortable chair',
      'The chair is a delight and has exceeded expectation'
    ],
    renter: {
      name: "Team5",
      location: "Mumbai",
    },
    images: [
      "/images/Category page images/yellow-chair.jpg",
      "/images/Category page images/white-chair.jpg",
      "/images/Category page images/yellow-chair.jpg",
    ],
  };
  
  return (
    <>
    <MainNavbar />
    <Container fluid className="mt-4 mb-4">
      <Card className="shadow-lg border-0">
        <CardBody>
          <Row className="align-items-center p-4">
            {/* Carousel for Images */}
            <Col lg={6} className="mb-4 mb-lg-0">
              <Carousel interval={null} data-bs-theme="dark" className="mb-3">
                {product.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100 rounded shadow-sm"
                      src={image}
                      alt={`Product Slide ${index + 1}`}
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <div className="text-center mt-3">
                <Link to="/checkout">
                  <Button
                    color="primary"
                    className="px-4 py-2"
                    style={{
                      backgroundColor: "#007bff",
                      border: "none",
                      borderRadius: "20px",
                    }}
                  >
                    Rent Now
                  </Button>
                </Link>
              </div>
            </Col>

            {/* Product Information */}
            <Col lg={6}>
              <h3 className="mb-3 text-primary">{product.title}</h3>
              <p className="text-muted mb-1">{product.company}</p>
              <p className="text-muted">{product.model}</p>

              <h5 className="mt-4 text-secondary">Product Description:</h5>
              <p className="text-dark">{product.description}</p>

              <h5 className="mt-4 text-secondary">Product Specifications:</h5>
              <ul>
                {product.specifications.map((spec, index) => (
                  <li key={index} className="text-dark">
                    {spec}
                  </li>
                ))}
              </ul>

              <h5 className="mt-4 text-secondary">Renter Information:</h5>
              <p className="text-dark">
                <strong>{product.renter.name}</strong>
                <br />
                {product.renter.location}
              </p>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
    <Footer />
    </>
  );
};

export default ProductDescription;