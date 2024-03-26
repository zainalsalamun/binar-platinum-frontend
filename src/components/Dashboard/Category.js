import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Category = () => {

  const categories = [
    { title: 'Meja', image:'assets/category/meja.jpg' },
    { title: 'Bantal', image: 'assets/category/bantal.jpg' },
    { title: 'Kursi', image: 'assets/category/kursi.jpg' },
    { title: 'Sofa', image: 'assets/category/sofa.jpg' },
    { title: 'Lemari', image: 'assets/category/lemari.jpg' },
    { title: 'Kasur', image: 'assets/category/kasur.jpg' }
  ];

  return (
    <Container>
      <h2 className="mt-4 mb-3">Kategori Pilihan</h2>
      <Row xs={1} md={3} lg={6} className="g-4">
        {categories.map((category, index) => (
          <Col key={index}>
            <Card>
              <Card.Img variant="top" src={category.image} alt={category.title} />
              <Card.Body>
                <Card.Title>{category.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Category;
