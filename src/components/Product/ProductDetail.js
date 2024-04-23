import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {useParams} from 'react-router';


const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const {id, nama_file} = useParams()


  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}` )
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, []);

  if (!product) {
    return <div>Loading...</div>;

    
  }

  const handleProductDetail = () => {
    window.location.href = `/product/${product.id}`;
  };
  
  return (
    <div className="container-detail">
      <Container fluid className="vh-50">
        <Row className="align-items-center">
          <Col md={4}>
            <img
              src={`assets/img/products/${product.nama_file}.jpg`}
              width="100%"
              alt={product.nama_file}
            />
          </Col>
          <Col md={6}>
            <h2>{product.nama_produk}</h2>
            <p>{product.deskripsi}</p>
            <div className="price h4">Rp. {product.harga}</div>
            <br />
            <a
              href={`https://api.whatsapp.com/send?phone=6285156965716&text=Halo Admin!%0ASaya%20mau%20pesan%20${product.nama_produk}%0AApakah%20Masih%20Ada?%0ATerima%20Kasih`}
            >
              <Button variant="outline-primary" onClick={handleProductDetail}>Pesan Sekarang</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
