"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

const DeleteProduct = (product) => {
  // console.info(product, '=> product');

  // > state
  const [isMutating, setIsMutating] = useState(false);

  // > router
  const router = useRouter();

  // > function handle when form in submit
  const handleDeleteProduct = async () => {
    // > setIsMutating = true
    // setIsMutating(true);

    const confirmation = window.confirm(`Are you sure delete ${product.productName}? data can't be repaired`);
    if (confirmation === true) {
      // > insert product to api
      await fetch(`http://localhost:3004/products/${product.id}`, {
        method: 'DELETE',
      });
    }

    router.refresh();
  };

  return (
    <>
      <span className="badge bg-danger" onClick={ handleDeleteProduct }>
        Delete
      </span>

      {/* <!-- Button trigger modal --> */}
      {/* <span className="badge bg-danger" data-bs-toggle="modal" data-bs-target="#deleteProductModal">
        Delete
      </span> */}

      {/* <!-- Modal --> */}
      {/* <div className="modal fade" id="deleteProductModal" tabIndex="-1" aria-labelledby="deleteProductModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Delete Product: { product.productName }
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Are you sure to delete data product? data can restore again after it</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              {
                isMutating === false ? (
                  <button type="button" className="btn btn-primary" onClick={ handleDeleteProduct }>
                    Delete Product
                  </button>
                ) : (
                  <button type="button" className="btn btn-primary disabled">
                    Deleting....
                  </button>
                )
              }
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default DeleteProduct;
