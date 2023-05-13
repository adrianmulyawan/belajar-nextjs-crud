"use client"
import { useState } from "react";

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  
  const handleAddProduct = (event) => {
    event.preventDefault();

    console.info(productName, productPrice, productCategory, 'datanya mi');
  };

  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addProductModal">
        Add New Product
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="addProductModal" tabIndex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add New Product
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={ handleAddProduct }>
                <div className="mb-3">
                  <label htmlFor="productName" className="form-label">
                    Product Name
                  </label>
                  <input type="text" className="form-control" id="productName" name="productName" onChange={ (e) => setProductName(e.target.value) } placeholder="Enter Product Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="productPrice" className="form-label">
                    Product Price
                  </label>
                  <input type="text" className="form-control" id="productPrice" name="productPrice" onChange={ (e) => setProductPrice(e.target.value) } placeholder="Enter Product Price" />
                </div>
                <div className="mb-3">
                  <label htmlFor="productCategory" className="form-label">
                    Product Category
                  </label>
                  <input type="text" className="form-control" id="productCategory" name="productCategory" onChange={ (e) => setProductCategory(e.target.value) } placeholder="Enter Product Price" />
                </div>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary mx-2">
                  Save Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
