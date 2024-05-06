import React, { useState, useEffect } from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Navbar, Footer } from '../Dashboard/'; 
import appConfig from "../../config/app.config"; 

const ProductList = () => {
  const REACT_APP_API_URL = appConfig.apiUrl;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(REACT_APP_API_URL + "api/products");
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(REACT_APP_API_URL + `api/products/${productId}`); 
      fetchData();
    } catch (error) {
      console.error('Error deleting product: ', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center mb-7">Daftar Produk</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Deskripsi</th>
              <th>Kategori</th> 
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="6"> 
                  <Alert variant="danger">
                    <b>Produk belum tersedia</b>
                  </Alert>
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.nama_produk}</td>
                  <td>Rp. {product.harga}</td>
                  <td>{product.deskripsi}</td>
                  <td>{product.image}</td>
                  <td>{product.kategori}</td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      {/* <Button
                        variant="info"
                        href={`/product/=${product.id}`}
                        style={{ marginBottom: '0.5rem' }}
                      >
                        Details
                      </Button> */}
                      <Button
                        variant="danger"
                        onClick={() => {
                          if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
                            handleDelete(product.id);
                          }
                        }}
                        style={{ marginBottom: '0.5rem' }}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="warning"
                        href={`/edit-product/edit=${product.id}`}
                        style={{ marginBottom: '0.5rem' }}
                      >
                        Edit
                      </Button>
                    </div>
                   
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
        <Button variant="primary" href="/add-product">
          Tambahkan Produk
        </Button>
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
