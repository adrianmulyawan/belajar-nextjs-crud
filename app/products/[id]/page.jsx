"use client";

import useSWR from 'swr';
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
import Link from 'next/link';

// > config swr
const fetcher = (...args) => fetch(...args).then(res => res.json())

const ProductUpdate =  ({ params }) => {
  // > state
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [target, setTarget] = useState('');

  // > insialisasi router
  const router = useRouter();
  
  // > console param
  // console.info(params, 'parameter');

  // > fetch data using swr
  const { id } = params;
  const { data, error } = useSWR(`http://localhost:3004/products/${id}`, fetcher);
  // console.info(data, '=> data update')

  // > mempebaiki masalah undefinde pada saat pertama kali variable 'data' data diconsole
  useEffect(() => {
    if (data && !error) {
      setName(data.productName);
      setPrice(data.productPrice);
      setCategory(data.productCategory);
      setTarget(data.productName);
    }
  }, [data, error]);

  // > handle form update 
  const handleUpdateProduct = async (event) => {
    event.preventDefault();

    // > data yang akan dikirim saat update
    const updateData = {
      productName: name,
      productPrice: price,
      productCategory: category
    };

    await fetch(`http://localhost:3004/products/${data.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData)
    });

    router.push('/products');
  };

  return (
    <>
      <div className="container mt-3">
        {
          error && (
            <h1>Failed to load product details</h1>
          )
        }
        {
          !data && (
            <h1>Data Not Found</h1>
          )
        }

        <h3>Update Product: { target }</h3>
        <hr />
        <div className="card p-3">
        <form onSubmit={ handleUpdateProduct }>
          <div className="mb-3">
            <label htmlFor="productName" className="form-label">
              Product Name
            </label>
            <input type="text" className="form-control" id="productName" name="productName" value={ name } onChange={ (e) => setName(e.target.value) } placeholder="Enter Product Name" />
          </div>
          <div className="mb-3">
            <label htmlFor="productPrice" className="form-label">
              Product Price
            </label>
            <input type="text" className="form-control" id="productPrice" name="productPrice" value={ price } onChange={ (e) => setPrice(e.target.value) } placeholder="Enter Product Price" />
          </div>
          <div className="mb-3">
            <label htmlFor="productCategory" className="form-label">
              Product Category
            </label>
            <input type="text" className="form-control" id="productCategory" name="productCategory" value={ category } onChange={ (e) => setCategory(e.target.value) } placeholder="Enter Product Price" />
          </div>
          <Link href={'/products'} className="btn btn-secondary">
            Back to Product
          </Link>
          <button type="submit" className="btn btn-primary mx-2">
            Update Product
          </button>
        </form>
        </div>
      </div>
    </>
  );
}

export default ProductUpdate;
