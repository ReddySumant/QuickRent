import React, { createContext, useContext, useState } from 'react';

const ItemContext = createContext();

export const useItems = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error('useItems must be used within an ItemProvider');
  }
  return context;
};

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([
    {
      id: 1,
      picture: 'https://rukminim2.flixcart.com/image/312/312/xif0q/television/v/0/c/l32ma-ain-mi-original-imah493pw3fsfrgz.jpeg?q=70',
      name: 'Mi by Xiaomi A Series 80 cm (32 inch) HD Ready LED Smart Google TV',
      description: 'Experience the Mi A Series TV, where stunning design meets exceptional performance. Its sleek metal frame and immersive fullscreen display offer captivating visuals. Enjoy high-quality 20W sound powered by Dolby Audio for an unparalleled audio experience.',
      price: 5000,
      date: '2024-12-20'
    },
    {
      id: 2,
      picture: 'https://rukminim2.flixcart.com/image/612/612/xif0q/wardrobe-closet/7/m/g/-original-imagrxnjzmvwhs6z.jpeg?q=70',
      name: 'Wardrobe ',
      description: 'Perfect Homes is a brand that converts a house into a home with furniture, furnishing & home decor for everyone. A brand that aims to make every home a perfect one with the latest & trendy designs and premium quality products that look great and are high on utility.',
      price: 2000,
      date: '2024-12-21'
    },
    {
      id: 3,
      picture: 'https://rukminim2.flixcart.com/image/312/312/xif0q/vacuum-cleaner/a/c/0/tvc-10-1200-watt-11-litre-blower-function-texum-original-imah6hryuxv94hyu.jpeg?q=70',
      name: 'Dry Vacuum Cleaner ',
      description: 'Bring home this Inalsa vacuum cleaner that features a powerful 1000 W pure copper motor. It comes with attachments that make cleaning easy. The compact design and ergonomic handle make it easy to use this vacuum cleaner.',
      price: 1000,
      date: '2025-01-02'
    }
  ]);

  const addItem = (newItem) => {
    setItems(prevItems => [
      ...prevItems,
      {
        ...newItem,
        id: Math.max(...prevItems.map(item => item.id), 0) + 1,
        date: new Date().toISOString().split('T')[0]
      }
    ]);
  };

  const updateItem = (updatedItem) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
  };

  const deleteItem = (itemId) => {
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <ItemContext.Provider value={{ items, addItem, updateItem, deleteItem }}>
      {children}
    </ItemContext.Provider>
  );
};