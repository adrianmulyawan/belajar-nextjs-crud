"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddProduct = () => {
  // > state
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [isMutating, setIsMutating] = useState(false);

  // > router
  const router = useRouter();

  // > function handle when form in submit
  const handleAddProduct = async (event) => {
    event.preventDefault();
    
    // > setIsMutating = true
    setIsMutating(true);

    // > parse price to int
    const parsePriceToInt = parseInt(productPrice)

    // > catch data from form in object
    const data = {
      productName: productName,
      productPrice: parsePriceToInt,
      productCategory: productCategory
    };

    // console.info(data, 'ini data product');

    // > insert product to api
    await fetch('  http://localhost:3004/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    // set mutating = false
    setIsMutating(false);

    // > set product name, price, category to string ''
    setProductName('');
    setProductPrice('');
    setProductCategory('');

    // > refresh page
    router.refresh();
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
                  <input type="text" className="form-control" id="productName" name="productName" value={ productName } onChange={ (e) => setProductName(e.target.value) } placeholder="Enter Product Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="productPrice" className="form-label">
                    Product Price
                  </label>
                  <input type="text" className="form-control" id="productPrice" name="productPrice" value={ productPrice } onChange={ (e) => setProductPrice(e.target.value) } placeholder="Enter Product Price" />
                </div>
                <div className="mb-3">
                  <label htmlFor="productCategory" className="form-label">
                    Product Category
                  </label>
                  <input type="text" className="form-control" id="productCategory" name="productCategory" value={ productCategory } onChange={ (e) => setProductCategory(e.target.value) } placeholder="Enter Product Price" />
                </div>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                {
                  isMutating === false ? (
                    <button type="submit" className="btn btn-primary mx-2">
                    Save Product
                  </button>
                  ) : (
                    <button type="submit" className="btn btn-primary mx-2 disabled">
                      Saving...
                    </button>
                  )
                }
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
