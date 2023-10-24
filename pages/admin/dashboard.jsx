import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";

export default function AdminDashboard() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  // Sample products list for demo
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API when component mounts
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this runs once when component mounts

  // Check if user is authenticated; if not, redirect to login
  useEffect(() => {
    // Check if user is authenticated; if not, redirect to login
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-6">Admin Dashboard</h1>
      <button
        onClick={() => router.push("/admin/add-product")}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
      >
        Add New Product
      </button>
      <table className="mt-8 w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border py-2 px-4">Name</th>
            <th className="border py-2 px-4">Description</th>
            <th className="border py-2 px-4">Price</th>
            <th className="border py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border py-2 px-4">{product.name}</td>
              <td className="border py-2 px-4">{product.description}</td>
              <td className="border py-2 px-4">${product.price}</td>
              <td className="border py-2 px-4">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline ml-4">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
