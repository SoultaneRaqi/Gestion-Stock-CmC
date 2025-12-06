export default function ProductCard({ product, onDelete }) {
  return (
    <div className="border rounded p-4 shadow bg-white">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>Quantity: {product.quantity}</p>
      <p>Price: {product.price} MAD</p>

      <button
        onClick={() => onDelete(product.id)}
        className="mt-3 bg-red-600 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
}
