import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import appConfig from '../../config/app.config';

const EditProductForm = ({ product, onEditProduct }) => {
  const { REACT_APP_API_URL } = appConfig;
  
  const [editedProduct, setEditedProduct] = useState({
    nama_produk: '',
    harga: '',
    deskripsi: '',
    image: ''
  });

  useEffect(() => {
    if (product) {
      setEditedProduct(product);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct(prevProduct => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.put(`${REACT_APP_API_URL}/api/product/${product._id}`, editedProduct);
      onEditProduct(response.data);
    } catch (error) {
      console.error('Error:', error);
      // You might want to handle error state here and provide user feedback
    }
  };

  if (!product) {
    return null; // Render nothing if product is not defined
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="nama_produk">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          name="nama_produk"
          value={editedProduct.nama_produk}
          placeholder="Product Name"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="harga">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="harga"
          value={editedProduct.harga}
          placeholder="Price"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="deskripsi">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={8}
          name="deskripsi"
          value={editedProduct.deskripsi}
          placeholder="Description"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="image">
        <Form.Label>Picture</Form.Label>
        <Form.Control
          type="text"
          name="image"
          value={editedProduct.image}
          placeholder="Picture"
          onChange={handleChange}
        />
        <Form.Text className="text-muted">Leave empty if you don't want to change picture.</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export default EditProductForm;
