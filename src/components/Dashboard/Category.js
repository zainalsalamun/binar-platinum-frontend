import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import appConfig from "../../config/app.config";


const Category = () => {
  const REACT_APP_API_URL = appConfig.apiUrl; 
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(REACT_APP_API_URL +'api/categories/view');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setCategories([
          { id: 1, title: 'Default Category', image_path: 'default.png' },
        ])
      } 
    };

    fetchData();
  }, []);
  console.log(categories)
  return (
    <Container>
      <h2 className="mt-4 mb-3">Kategori Pilihan</h2>
      <Row xs={1} md={3} lg={6} className="g-4">
        {categories?.map((category, index) => (
          <Col key={index}>
            <Card>
              <Card.Img variant="top" src={REACT_APP_API_URL + category.image_path} alt={category.title} />
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
