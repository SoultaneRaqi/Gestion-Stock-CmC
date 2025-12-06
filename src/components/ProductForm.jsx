import { useState } from "react";

export default function ProductForm({ onSubmit }) {
  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    price: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: crypto.randomUUID(),
      ...product,
      quantity: Number(product.quantity),
      price: Number(product.price)
    };

    onSubmit(newProduct);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
      <input
        className="border p-2 rounded"
        placeholder="Product name"
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        required
      />

      <input
        className="border p-2 rounded"
        placeholder="Quantity"
        type="number"
        onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
        required
      />

      <input
        className="border p-2 rounded"
        placeholder="Price"
        type="number"
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
        required
      />

      <button className="bg-blue-600 text-white p-2 rounded">
        Add Product
      </button>
    </form>
  );
}
