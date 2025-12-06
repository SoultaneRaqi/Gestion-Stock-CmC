import { getProducts, removeProduct } from "../utils/storage";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

export default function ProductsList() {
  const [data, setData] = useState(() => getProducts());

  const handleDelete = (id) => {
    removeProduct(id);
    setData(prev => prev.filter(p => p.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Products List</h1>

      <div className="grid grid-cols-3 gap-4">
        {data.map((p) => (
          <ProductCard key={p.id} product={p} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
