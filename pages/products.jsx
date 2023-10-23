import React, { useEffect, useState } from "react";
import axios from "axios";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Fetch products from your backend
  //   fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching products:", error);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    // Fetch products from the backend using axios
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/products`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold mb-4">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="border p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <h2 className="text-xl font-medium mt-2">{product.name}</h2>
            <p>{product.description}</p>
            <p className="text-lg font-semibold">{product.price} $</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
              Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
