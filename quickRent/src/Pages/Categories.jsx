import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { BsHeart, BsCart3 } from 'react-icons/bs';
import TopBar from '../components/TopBar';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import '../styles/Categories.css';
import products from '../components/ProductsData';

function Categories() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Electronics', 'Appliances', 'Furnitures', 'H/W Tools', 'Events/Decors', 'Sports/Gears'];

  

  // Filter products based on the active category
  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="app">
      <TopBar />
      <MainNavbar />
      
      <div className="categories-banner">
        <h1>CATEGORIES</h1>
      </div>

      <div className="categories-page">
        <Container fluid="lg">
          {/* Category buttons */}
          <div className="category-buttons">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'primary' : 'outline-primary'}
                className="category-button"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <Row className="g-4 mt-3">
            {filteredProducts.map((product) => (
              <Col key={product.id} xs={12} sm={6} lg={4}>
                <Card className="product-card">
                  <div className="card-image-wrapper">
                    <Card.Img variant="top" src={product.image} />
                   
                  </div>
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <div className="product-features">
                      {product.features.map((feature, index) => (
                        <p key={index}>• {feature}</p>
                      ))}
                    </div>
                    <div className="product-info">
                      <span>Seller: {product.seller}</span>
                      <span>Location: {product.location}</span>
                    </div>
                    <div className="product-actions">
                      <Button variant="primary">Buy Now</Button>
                      <Button variant="dark" className="cart-btn">
                        <BsHeart />
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
}

export default Categories;
