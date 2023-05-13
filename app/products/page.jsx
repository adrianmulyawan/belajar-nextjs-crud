import AddProduct from "./addProduct";
import DeleteProduct from "./deleteProduct";

// > get all data products
const getProducts = async () => {
  // > menambahkan argument kedua { cache: 'no-store' }, agar dia menjadi data dinamis (seolah-olah mengguakan getServerSideProps).
  // => jadi setiap ada request ke 'http://localhost:3000/products', maka halaman ini akan di render ulang (data ikut terupdate juga).
  // > Jika tidak memberikan argument ke-2 ini akan dianggap sebagai SSG (Static Site Generation).
  const response = await fetch('http://localhost:3004/products', {
    cache: 'no-store'
  });

  return response.json();
};

const Product = async () => {
  const products = await getProducts();

  return (
    <>
      <div className="container mt-3">
        <h2>Products List</h2>
        <hr />
        <AddProduct />
        <div className="row my-3">
          <div className="card p-3">
            <table className="table table-responsive table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col" className="text-center">No</th>
                  <th scope="col" className="text-center">Product Name</th>
                  <th scope="col" className="text-center">Price</th>
                  <th scope="col" className="text-center">Category</th>
                  <th scope="col" className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.map((product, index) => (
                    <tr key={ product.id }>
                      <th scope="row" className="text-center">
                        { index += 1 }
                      </th>
                      <td className="text-center">
                        { product.productName }
                      </td>
                      <td className="text-center">
                        { product.productPrice }
                      </td>
                      <td className="text-center">
                        { product.productCategory }
                      </td>
                      <td className="text-center">
                        <span className="badge bg-secondary me-2">
                          Edit
                        </span>
                        <DeleteProduct { ...product } />
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
