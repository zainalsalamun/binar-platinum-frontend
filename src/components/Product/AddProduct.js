import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    nama_produk: '',
    harga: '',
    deskripsi: '',
    nama_file: '',
    kategori: '',
    image: ''
  });

  const handleChange = (e) => {

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'nama_file') {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        [name]: file
      });
    }
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://103.127.133.54:3000/api/product', formData);
      console.log(response.data);
      alert('Produk Berhasil');
      window.location.href = "/";
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit}>
            <h1 className="mb-4 text-center">Tambahkan Produk</h1>

            <Form.Group controlId="formNamaProduk" className="mb-4">
              <Form.Label>Nama Produk</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan Nama Produk"
                name="nama_produk"
                value={formData.nama_produk}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formHarga" className="mb-4">
              <Form.Label>Harga</Form.Label>
              <Form.Control
                type="number"
                placeholder="Masukkan Harga"
                name="harga"
                value={formData.harga}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formDeskripsi" className="mb-4">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Masukkan Deskripsi"
                name="deskripsi"
                value={formData.deskripsi}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formNamaFile" className="mb-4">
              <Form.Label>Nama File</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan Nama File"
                name="nama_file"
                value={formData.nama_file}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formNamaFile" className="mb-4">
              <Form.Label>Kategori</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan Kategori"
                name="nama_file"
                value={formData.kategori}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formNamaFile" className="mb-4">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan Image"
                name="nama_file"
                value={formData.image}
                onChange={handleChange}
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Tambah Produk
              </Button>
            </div>
            <br />
          
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProductForm;
