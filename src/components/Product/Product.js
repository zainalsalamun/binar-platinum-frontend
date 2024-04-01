import React, { useState, useEffect } from 'react';
import { Alert, Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/api/products')
            .then(response => {
                
                setProducts(response.data.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Terjadi kesalahan saat memuat data');
            });
    }, []);

    return (
        <div className="container">
                  <h2 className="mt-4 mb-3">Produk Pilihan</h2>
            {error && (
                <Alert variant="danger">
                    <b>{error}</b>
                </Alert>
            )}
            {!error && products.length === 0 && (
                <Alert variant="danger">
                    <b>Data produk tidak tersedia</b>
                </Alert>
            )}
            {products.length > 0 && (
                <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                    {products.map((product, i) => (
                        <Col key={i}>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={`assets/img/products/${product.nama_file}.jpg`}
                                    alt={product.nama_produk}
                                />
                                <Card.Body>
                                    <Card.Title>{product.nama_produk}</Card.Title>
                                    <Card.Text className="price-text">{product.deskripsi}</Card.Text>
                                    <Card.Text className="price">Rp. {product.harga}</Card.Text>
                                    <Card.Text className="price-desc">selama persediaan masih ada</Card.Text>
                                    <Button variant="outline-primary" href={`/product-register=${product.id}`}>
                                        Detail
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
}

export default App;

// import React from 'react';
// import { Alert, Card, Button, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//     const products = [
//         {
//             id: 1,
//             nama_produk: 'Boneka',
//             nama_file: 'https://www.ikea.co.id/dairyfarm/id/images/243/0924333_PE788549_S4',
//             deskripsi: 'This is a dummy product.',
//             harga: 9999,
//         },
//         {
//             id: 2,
//             nama_produk: 'Gantungan',
//             nama_file: 'https://www.ikea.co.id/dairyfarm/id/images/327/0832754_PE777804_S4',
//             deskripsi: 'This is  dummy product.',
//             harga: 8888,
//         },
//         {
//             id: 3,
//             nama_produk: 'Keranjang',
//             nama_file: 'https://www.ikea.co.id/dairyfarm/id/images/650/1165010_PE890705_S4',
//             deskripsi: 'Yet  dummy product.',
//             harga: 7777,
//         },
//         {
//             id: 4,
//             nama_produk: 'Pisau',
//             nama_file: 'https://www.ikea.co.id/dairyfarm/id/images/117/0711773_PE728423_S4',
//             deskripsi: 'One more dummy product.',
//             harga: 6666,
//         },
//     ];

//     return (
//         <div className="container">
//             {products.length === 0 ? (
//                 <Alert variant="danger">
//                     <b>Contact hasn't been filled</b>
//                 </Alert>
//             ) : (
//                 <Row xs={1} md={2} lg={3} xl={4} className="g-4">
//                     {products.map((product, i) => (
//                         <Col key={i}>
//                             <Card>
//                                 <Card.Img
//                                     variant="top"
//                                     src={`${product.nama_file}.jpg`}
//                                     alt={product.nama_file}
//                                 />
//                                 <Card.Body>
//                                     <Card.Title>{product.nama_produk}</Card.Title>
//                                     <Card.Text className="price-text">{product.deskripsi}</Card.Text>
//                                     <Card.Text className="price">Rp. {product.harga}</Card.Text>
//                                     <Card.Text className="price-desc">selama persediaan masih ada</Card.Text>
//                                     <Button variant="outline-primary" href={`/product-register=${product.id}`}>
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
