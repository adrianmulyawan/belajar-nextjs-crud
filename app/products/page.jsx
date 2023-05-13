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
        <div className="row my-3">
          <div className="card p-3">
            <table class="table table-responsive table-bordered table-striped">
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
                  products && (
                    products.map((product, index) => {
                      return (
                        <tr>
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
                            <span class="badge bg-secondary">
                              Edit
                            </span>
                            <span class="badge bg-danger mx-2">
                              Delete
                            </span>
                          </td>
                        </tr>
                      )
                    })
                  )
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
