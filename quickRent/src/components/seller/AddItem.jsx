import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useItems } from '../../context/ItemContext';

const AddItem = () => {
  const navigate = useNavigate();
  const { addItem } = useItems();
  const [showSuccess, setShowSuccess] = useState(false);
  const [item, setItem] = useState({
    name: '',
    description: '',
    price: '',
    picture: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({
      ...item,
      price: Number(item.price)
    });
    setShowSuccess(true);
    setTimeout(() => {
      navigate('/seller');
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Container fluid className="py-4 px-lg-5">
      {showSuccess && (
        <Alert variant="success" className="mb-3">
          Item added successfully! Redirecting to dashboard...
        </Alert>
      )}
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={6}>
          <Card className="shadow-sm">
            <Card.Body className="p-3">
              <h2 className="h4 mb-3 text-center">Add New Item</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold small">Item Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={item.name}
                    onChange={handleChange}
                    required
                    size="sm"
                    className="shadow-sm"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold small">Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={item.description}
                    onChange={handleChange}
                    required
                    size="sm"
                    className="shadow-sm"
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-bold small">Price per Day (₹)</Form.Label>
                      <Form.Control
                        type="number"
                        name="price"
                        value={item.price}
                        onChange={handleChange}
                        required
                        min="0"
                        step="1"
                        size="sm"
                        className="shadow-sm"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="fw-bold small">Picture URL</Form.Label>
                      <Form.Control
                        type="url"
                        name="picture"
                        value={item.picture}
                        onChange={handleChange}
                        required
                        size="sm"
                        className="shadow-sm"
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <div className="d-grid">
                  <Button 
                    variant="primary" 
                    type="submit" 
                    size="sm"
                    className="py-2 fw-bold"
                  >
                    Add Item
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddItem;
