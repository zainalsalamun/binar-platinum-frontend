import React, { useState, useEffect } from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/products'); 
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${productId}`); 
      fetchData();
    } catch (error) {
      console.error('Error deleting product: ', error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Daftar Produk</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Deskripsi</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="5">
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
                <td>
                  <Button variant="info" href={`/product/=${product.id}`}>
                    Details
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
                        handleDelete(product.id);
                      }
                    }}
                  >
                    Delete
                  </Button>
                  <Button variant="warning" href={`/edit-product/edit=${product.id}`}>
                    Edit
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
      <Button variant="primary" href="/add-product">
        Tambahkan Produk
      </Button>
    </div>
  );
};

export default ProductList;
