import React from 'react';

function ProductDetail({ product }) {
  return (
    <div className="container-detail">
      <div className="container-lg vh-50">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img src={`img/products/${product.nama_file}.jpg`} width="100%" alt={product.nama_file} />
          </div>
          <div className="col-md-6">
            <h2>{product.nama_produk}</h2>
            <p>{product.deskripsi}</p>
            <div className="price h4">Rp. {product.harga}</div>
            <br />
            <a href={`https://api.whatsapp.com/send?phone=6285156965716&text=Halo Admin!%0ASaya%20mau%20pesan%20${product.nama_produk}%0AApakah%20Masih%20Ada?%0ATerima%20Kasih`}>
              <button type="button" className="btn btn-outline-primary">Pesan Sekarang</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
