// import React from "react";
// //import { Navbar, Footer } from "../components";
// import { useSelector, useDispatch } from "react-redux";
// import { addCart, delCart } from "../redux/action";
// import { Link } from "react-router-dom";
// import { Container, Row, Col, Button } from "react-bootstrap";

// const Cart = () => {
//   const state = useSelector((state) => state.handleCart);
//   const dispatch = useDispatch();

//   const EmptyCart = () => {
//     return (
//       <Container>
//         <Row>
//           <Col md={12} className="py-5 bg-light text-center">
//             <h4 className="p-3 display-5">Your Cart is Empty</h4>
//             <Link to="/" className="btn  btn-outline-dark mx-4">
//               <i className="fa fa-arrow-left"></i> Continue Shopping
//             </Link>
//           </Col>
//         </Row>
//       </Container>
//     );
//   };

//   const addItem = (product) => {
//     dispatch(addCart(product));
//   };
//   const removeItem = (product) => {
//     dispatch(delCart(product));
//   };

//   const ShowCart = () => {
//     let subtotal = 0;
//     let shipping = 30.0;
//     let totalItems = 0;
//     state.forEach((item) => {
//       subtotal += item.price * item.qty;
//       totalItems += item.qty;
//     });

//     return (
//       <section className="h-100 gradient-custom">
//         <Container>
//           <Row className="d-flex justify-content-center my-4">
//             <Col md={8}>
//               <div className="card mb-4">
//                 <div className="card-header py-3">
//                   <h5 className="mb-0">Item List</h5>
//                 </div>
//                 <div className="card-body">
//                   {state.map((item) => (
//                     <div key={item.id}>
//                       <Row className="d-flex align-items-center">
//                         <Col lg={3} md={12}>
//                           <div className="bg-image rounded">
//                             <img
//                               src={item.image}
//                               alt={item.title}
//                               width={100}
//                               height={75}
//                             />
//                           </div>
//                         </Col>
//                         <Col lg={5} md={6}>
//                           <p>
//                             <strong>{item.title}</strong>
//                           </p>
//                         </Col>
//                         <Col lg={4} md={6}>
//                           <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
//                             <Button
//                               className="btn px-3"
//                               onClick={() => removeItem(item)}
//                             >
//                               <i className="fas fa-minus"></i>
//                             </Button>
//                             <p className="mx-5">{item.qty}</p>
//                             <Button
//                               className="btn px-3"
//                               onClick={() => addItem(item)}
//                             >
//                               <i className="fas fa-plus"></i>
//                             </Button>
//                           </div>
//                           <p className="text-start text-md-center">
//                             <strong>
//                               <span className="text-muted">{item.qty}</span>{" "}
//                               x ${item.price}
//                             </strong>
//                           </p>
//                         </Col>
//                       </Row>
//                       <hr className="my-4" />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </Col>
//             <Col md={4}>
//               <div className="card mb-4">
//                 <div className="card-header py-3 bg-light">
//                   <h5 className="mb-0">Order Summary</h5>
//                 </div>
//                 <div className="card-body">
//                   <ul className="list-group list-group-flush">
//                     <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
//                       Products ({totalItems})<span>${Math.round(subtotal)}</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between align-items-center px-0">
//                       Shipping
//                       <span>${shipping}</span>
//                     </li>
//                     <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
//                       <div>
//                         <strong>Total amount</strong>
//                       </div>
//                       <span>
//                         <strong>${Math.round(subtotal + shipping)}</strong>
//                       </span>
//                     </li>
//                   </ul>
//                   <Link to="/checkout" className="btn btn-dark btn-lg btn-block">
//                     Go to checkout
//                   </Link>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     );
//   };

//   return (
//     <>
//     {/* <Navbar /> */}
//       <Container className="my-3 py-3">
//         <h1 className="text-center">Cart</h1>
//         <hr />
//         {state.length > 0 ? <ShowCart /> : <EmptyCart />}
//       </Container>
//       {/* <Footer /> */}
//     </>
//   );
// };

// export default Cart;
