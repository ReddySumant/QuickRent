import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import '../styles/Categories.css';

export function Products({ categoryId }) {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    async function fetchProducts() {
      if (!categoryId) return;

      try {
        console.log("Fetching products for categoryId:", categoryId);
        const response = await axios.get(`http://localhost:8080/categories/${categoryId}`);
        console.log("API Response:", response.data);
        setProducts(response.data.products || []); 
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    }

    fetchProducts();
  }, [categoryId]);


  if (products.length === 0) {
    return <div>No products available for this category.</div>;
  }


  return (
    <>
      {products.map((product) => (
        <Col key={product.productId} xs={12} sm={6} lg={4}>
          <Card className="product-card">
            <div className="card-image-wrapper">
              <Card.Img variant="top" src={product.image || "/path/to/default-image.jpg"} alt={product.title} />
            </div>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <div className="product-info">
                <p>Brand: {product.brandName}</p>
                <p>Price: ${product.price}</p>
              </div>
              <div className="product-actions">
                <Link to={{ pathname: '/description', state: product.productId }}>
                  <Button variant="primary">View Details</Button>
                </Link>
                <Button variant="dark" className="cart-btn">
                  <BsHeart />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
}
