import React, { useState } from 'react';

function ProductForm({ product }) {
  const [namaProduk, setNamaProduk] = useState(product.nama_produk);
  const [harga, setHarga] = useState(product.harga);
  const [deskripsi, setDeskripsi] = useState(product.deskripsi);
  const [namaFile, setNamaFile] = useState(product.nama_file);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan sesuatu dengan data produk yang diperbarui, misalnya kirim ke server atau perbarui state aplikasi
    console.log({ namaProduk, harga, deskripsi, namaFile });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="nama_produk">Product Name</label>
        <input
          type="text"
          id="nama_produk"
          name="nama_produk"
          value={namaProduk}
          placeholder="Product Name"
          className="form-control"
          required
          onChange={(event) => setNamaProduk(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="harga">Price</label>
        <input
          type="number"
          id="harga"
          name="harga"
          value={harga}
          placeholder="Price"
          className="form-control"
          required
          onChange={(event) => setHarga(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="deskripsi">Description</label>
        <textarea
          id="deskripsi"
          name="deskripsi"
          rows="8"
          placeholder="Description"
          className="form-control"
          required
          value={deskripsi}
          onChange={(event) => setDeskripsi(event.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="nama_file">Picture</label>
        <input
          type="text"
          id="nama_file"
          name="nama_file"
          value={namaFile}
          placeholder="Picture"
          className="form-control"
          required
          onChange={(event) => setNamaFile(event.target.value)}
        />
        <small className="form-text text-muted">Jika tidak ingin mengganti picture, biarkan kosong.</small>
      </div>
      <button type="submit" className="btn btn-primary">Simpan</button>
    </form>
  );
}

export default ProductForm;
