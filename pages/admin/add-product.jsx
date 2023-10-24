import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
export default function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        name: name,
        description: description,
        price: price,
      };

      await axios.post("http://localhost:3000/api/products", productData);
      // On success, navigate back to the dashboard
      router.push("/admin/dashboard");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-6">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border p-2 w-full rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="border p-2 w-full rounded h-32"
          ></textarea>
        </div>
        <div>
          <label className="block mb-2">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            required
            className="border p-2 w-full rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
