// import React, { useState, useEffect } from 'react';
// import { Alert, Card, Button, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';

// function App() {
//     const [products, setProducts] = useState([]);
//     const [error, setError] = useState(null);

//     const handleProductDetail = (product) => {
    
//         window.location.href = `/product/${product.id}`
//     }

//     useEffect(() => {
//         axios.get('http://localhost:3000/api/products')
//             .then(response => {
                
//                 setProducts(response.data.data);
//                 console.log(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//                 const isLoading = products.length === 0 && !error;
//             if (isLoading) {
//                 return <div className="text-center">Loading...</div>;
//             } 
//             setError(error.message);
            
//             });
//     }, []);

//     return (
//         <div className="container">
//                   <h2 className="mt-4 mb-3">Produk Pilihan</h2>
//             {error && (
//                 <Alert variant="danger">
//                     <b>{error}</b>
//                 </Alert>
//             )}
//             {!error && products.length === 0 && (
//                 <Alert variant="danger">
//                     <b>Data produk tidak tersedia</b>
//                 </Alert>
//             )}
//             {products.length > 0 && (
//                 <Row xs={1} md={2} lg={3} xl={4} className="g-4">
//                     {products.map((product, i) => (
//                         <Col key={i}>
//                             <Card>
//                                 <Card.Img
//                                     variant="top"
//                                     src={`assets/img/products/${product.nama_file}.jpg`}
//                                     alt={product.nama_produk}
//                                     className="card-img-top"

//                                     onClick={() => handleProductDetail(product)}

//                                 />
//                                 <Card.Body>
//                                     <Card.Title>{product.nama_produk}</Card.Title>
//                                     <Card.Text className="price-text">{product.deskripsi}</Card.Text>
//                                     <Card.Text className="price">Rp. {product.harga}</Card.Text>
//                                     <Card.Text className="price-desc">selama persediaan masih ada</Card.Text>
                                

//                                     <Button variant="outline-primary" onClick={() => handleProductDetail(product)}>
//                                         Detail
//                                     </Button>
                                  
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//             )}
//         </div>
//     );
// }

// export default App;
