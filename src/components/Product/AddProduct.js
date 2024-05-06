import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import appConfig from '../../config/app.config';
import {NavBar, Footer} from '../Dashboard/NavBar';

const AddProductForm = () => {
  const REACT_APP_API_URL = appConfig.apiUrl;
  const [formData, setFormData] = useState({
    nama_produk: '',
    nama_file: '',
    deskripsi: '',
    kategori: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (files && files[0]) {
      setSelectedFile(files[0]);
    }
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        formDataToSend.append(key, formData[key]);
      });
      if (selectedFile) {
        formDataToSend.append('image', selectedFile);
      }
      const response = await axios.post(
        `${REACT_APP_API_URL}api/products/add`, formDataToSend, 
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
  
      if (response.status === 201) {
        alert('Produk berhasil ditambahkan');
        window.location.href = "/product-list";
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Gagal menambahkan produk');
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

            <Form.Group controlId="formNamaProduk" className="mb-4">
              <Form.Label>Nama File</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan Nama Produk"
                name="nama_produk"
                value={formData.nama_file}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formKategori" className="mb-4">
              <Form.Label>Kategori</Form.Label>
              <Form.Select name="kategori" value={formData.kategori} onChange={handleChange}>
                <option>Pilih Kategori</option>
                <option value="meja">Meja</option>
                <option value="bantal">Bantal</option>
                <option value="kasur">Kasur</option>
                <option value="kursi">Kursi</option>
                <option value="lemari">Lemari</option>
                <option value="sofa">Sofa</option>
                <option value="sikat">Sikat</option>
                <option value="ember">Ember</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-4">
              <Form.Label>Pilih Gambar</Form.Label>
              <Form.Control type="file" name="image" onChange={handleChange} />
            </Form.Group>


            <div className="d-grid">
              <Button variant="primary" type="submit" onClick={handleSubmit}>
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
