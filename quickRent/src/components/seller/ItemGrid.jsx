import React, { useState } from 'react';
import { Row, Col, Card, Badge, Button } from 'react-bootstrap';
import EditItemModal from './EditItemModal';
import DeleteConfirmation from './DeleteConfirmation';
import { useItems } from '../../context/ItemContext';
import { formatCurrency } from '../../utils/currency';

const ItemGrid = () => {
  const { items, updateItem, deleteItem } = useItems();
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setShowEditModal(true);
  };

  const handleDelete = (item) => {
    setSelectedItem(item);
    setShowDeleteModal(true);
  };

  const handleSaveEdit = (editedItem) => {
    updateItem(editedItem);
    setShowEditModal(false);
  };

  const handleConfirmDelete = () => {
    deleteItem(selectedItem.id);
    setShowDeleteModal(false);
  };

  return (
    <>
      <Row className="g-4">
        {items.map((item) => (
          <Col key={item.id} xs={12} md={6} xl={4}>
            <Card className="h-100 shadow-sm hover-shadow transition-all">
              <Card.Img 
                variant="top" 
                src={item.picture} 
                style={{ 
                  height: '250px', 
                  objectFit: 'cover'
                }}
              />
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <Card.Title className="h4 mb-0">{item.name}</Card.Title>
                  <Badge 
                    bg="primary" 
                    className="px-3 py-2 rounded-pill"
                  >
                    {formatCurrency(item.price)}/day
                  </Badge>
                </div>
                <Card.Text className="text-muted mb-4">
                  {item.description}
                </Card.Text>
                <div className="justify-content-between align-items-center">
                  <small className="text-muted">Listed: {item.date}</small>
                  <div>
                    <Button 
                      variant="outline-primary" 
                      size="sm" 
                      className="gap-2"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </Button>
                    <Button 
                      variant="outline-danger" 
                      size="sm"
                      onClick={() => handleDelete(item)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <EditItemModal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        item={selectedItem}
        onSave={handleSaveEdit}
      />

      <DeleteConfirmation
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        onConfirm={handleConfirmDelete}
        itemName={selectedItem?.name}
      />
    </>
  );
};

export default ItemGrid;