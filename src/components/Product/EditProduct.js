import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const EditProductForm = ({ product }) => {
  const [editedProduct, setEditedProduct] = useState(product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Data yang diedit:', editedProduct);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="nama_produk">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          type="text"
          name="nama_produk"
          value={editedProduct.nama_produk || ''}
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
          value={editedProduct.harga || ''}
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
          value={editedProduct.deskripsi || ''}
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
          value={editedProduct.image || ''}
          placeholder="Picture"
          onChange={handleChange}
          required
        />
        <Form.Text className="text-muted">Jika tidak ingin mengganti picture, biarkan kosong.</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Simpan
      </Button>
    </Form>
  );
};

export default EditProductForm;
