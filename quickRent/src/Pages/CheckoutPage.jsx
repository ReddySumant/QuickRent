import React, { useState } from "react";
import { Form, Button, Row, Col, Container, InputGroup, FloatingLabel, Card, CardBody } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import Footer from "../components/Footer";
import MainNavbar from "../components/MainNavbar";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    tenure: "daily",
    startDate: "",
    endDate: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
    coupon: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [subtotal, setSubtotal] = useState(1000); // Example value
  const taxRate = 0.3; // Example 30% tax rate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    const zip_regex = /^[1-9][0-9]{5}$/;
    const address_regex = /^[A-Za-z0-9\s,/-]{10,}$/;
    const city_regex = /^[A-Za-z]+(?:[\s-][A-Za-z]+)*$/;
    const state_regex = /^[A-Za-z]+(?:[\s-][A-Za-z]+)*$/;
    const country_regex = /^[A-Za-z]+(?:[\s-][A-Za-z]+)*$/

    if (!formData.address) {
      errors.address = "Address is required.";
    }else if(!address_regex.test(formData.address)){
      errors.address = "Enter Valid Address";
    }

    if (!formData.city) {
      errors.city = "City field is required."
    }else if (!city_regex.test(formData.city)){
      errors.city = "Please enter valid city name";
    }

    if (!formData.state) {
      errors.state = "State field is required."
    }else if (!state_regex.test(formData.state)){
      errors.state = "Please enter valid state name";
    }

    if (!formData.country) {
      errors.country = "country field is required."
    }else if (!country_regex.test(formData.country)){
      errors.country = "Please enter valid country name";
    }
    
    if (!formData.pinCode) {
      errors.pinCode = "Pin Code is required."
    }else if (!zip_regex.test(formData.pinCode)){
      errors.pinCode = "Invalid pin code.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      navigate("/order-placed");
    } else {
      setErrors(validationErrors);
    }
  };

  const handleApplyCoupon = () => {
    // Example coupon logic
    if (formData.coupon === "DISCOUNT10") {
      setSubtotal(subtotal * 0.9); // 10% discount
    } else {
      alert("Invalid coupon code.");
    }
  };

  const total = subtotal + subtotal * taxRate;

  return (
    <>
    <MainNavbar />
    <Container fluid className="p-4">
      <Card className="shadow border-0">
      <CardBody>
      <Form onSubmit={handleSubmit}>
        <Row style={{padding:"20px"}}>
          <Col md={6} mx={2} style={{borderRight: "1px dashed black", paddingRight:"50px"}}>
          <div>
            <h5 className="text-primary mb-4">Select Tenure</h5>
            <Form.Check type="radio"
              label="Daily"
              name="tenure"
              value="daily"
              checked={formData.tenure === "daily"}
              onChange={handleChange}
              inline
            />
            <Form.Check
              type="radio"
              label="Monthly"
              name="tenure"
              value="monthly"
              checked={formData.tenure === "monthly"}
              onChange={handleChange}
              inline
            />
            <Form.Check
              type="radio"
              label="Yearly"
              name="tenure"
              value="yearly"
              checked={formData.tenure === "yearly"}
              onChange={handleChange}
              inline
            />

            <Form.Group controlId="startDate" className="mt-3">
              <Form.Label>Enter Start Date</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="endDate" className="mt-3">
              <Form.Label>Enter End Date</Form.Label>
              <Form.Control
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <br/>

            <hr />

            <h5 className="mt-4">Enter Address</h5>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                isInvalid={!!errors.address}
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>

            <Row className="mt-3">
              <Col>
                <Form.Group controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    isInvalid={!!errors.city}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.city}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="state">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    isInvalid={!!errors.state}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.state}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                <Form.Group controlId="country">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    isInvalid={!!errors.country}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.country}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="pinCode">
                  <Form.Label>Pin Code</Form.Label>
                  <Form.Control
                    type="text"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                    isInvalid={!!errors.pinCode}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.pinCode}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
          </div>
          </Col>

          <Col md={6} className="border-left" style={{paddingLeft:"50px"}}>
            <div>
            <h5 className="text-primary mb-4">Billing Details</h5>
            <br />
            <div className="d-flex align-items-center mb-3">
              {/* <div
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: "#ddd",
                  marginRight: 15,
                }}
              ></div> */}
            <img src="/images/Category page images/yellow-chair.jpg" alt="" style={{height:"100px", weight:"100px", marginRight:"3rem"}} />
              <div>
                <p className="mb-0"><b>A1S Cushioned Lounge Chair</b></p>
                <small>Green Soul</small>
                <br/>
                <small>Amaze Series</small>
                <br/>
                <small>Sold by : </small>
                <small>Team5</small>
              </div>
            </div>
            <br/>
            <div>
              <div style={{width: "80%"}}>
                <div style={{display: "flex", justifyContent:"space-between"}}>
                  <span>Subtotal:</span>
                  <span> ₹{subtotal.toFixed(2)}</span>
                </div>
                <div style={{display: "flex", justifyContent:"space-between"}}>
                  <span>Taxes:</span>
                  <span> ₹{(subtotal * taxRate).toFixed(2)}</span>
                </div>
                <hr />
                <div style={{display: "flex", justifyContent:"space-between"}}>
                  <span><b>Total:</b></span>
                  <span><b> ₹{total.toFixed(2)} </b></span>
                </div>
                <Button variant="primary" type="submit" className="mt-4 w-100">
                Proceed
                </Button>
              </div>
            </div>
            </div>
          </Col>
        </Row>
      </Form>
      </CardBody>
      </Card>
    </Container>
    <Footer />
    </>
  );
};

export default CheckoutPage;
