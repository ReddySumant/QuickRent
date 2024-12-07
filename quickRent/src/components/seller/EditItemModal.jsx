import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const EditItemModal = ({ show, onHide, item, onSave }) => {
  const [editedItem, setEditedItem] = useState(item);

  useEffect(() => {
    setEditedItem(item);
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem(prev => ({
      ...prev,
      [name]: name === 'price' ? Number(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedItem);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Edit Item</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={editedItem?.name || ''}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={editedItem?.description || ''}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price per Day (₹)</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={editedItem?.price || ''}
              onChange={handleChange}
              required
              min="0"
              step="1"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Picture URL</Form.Label>
            <Form.Control
              type="url"
              name="picture"
              value={editedItem?.picture || ''}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default EditItemModal;