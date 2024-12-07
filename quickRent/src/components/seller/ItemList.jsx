import React from 'react';
import { Container, Table, Image } from 'react-bootstrap';
import tvImage from './assets/images/tv.webp'; 
import tentImage from './assets/images/mi.webp'; 

const ItemList = () => {
  const items = [
    {
      id: 1,
      picture: tvImage,
      name: 'Mi by Xiaomi A Series 80 cm (32 inch) HD Ready LED Smart Google TV',
      description:
        'Experience the Mi A Series TV, where stunning design meets exceptional performance. Its sleek metal frame and immersive fullscreen display offer captivating visuals. Enjoy high-quality 20W sound powered by Dolby Audio for an unparalleled audio experience.',
      price: 5000,
      date: '2024-12-20',
    },
    {
      id: 2,
      picture: tentImage,
      name: 'Camping Tent',
      description: '4-person camping tent',
      price: 35,
      date: '2024-02-21',
    },
  ];

  const imageStyle = {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
  };

  return (
    <Container fluid className="p-4">
      <h2 className="mb-4">My Listed Items</h2>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price ($/day)</th>
            <th>Listed Date</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <Image src={item.picture} alt={item.name} style={imageStyle} rounded />
              </td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>${item.price}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ItemList;
