import { getProducts } from "../utils/storage";

export default function Dashboard() {
  const products = getProducts();

  const totalProducts = products.length;
  const totalQuantity = products.reduce((sum, p) => sum + p.quantity, 0);
  const totalValue = products.reduce((sum, p) => sum + p.quantity * p.price, 0);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Number of Products</h2>
          <p className="text-2xl">{totalProducts}</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Total Quantity</h2>
          <p className="text-2xl">{totalQuantity}</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Stock Value (MAD)</h2>
          <p className="text-2xl">{totalValue}</p>
        </div>
      </div>
    </div>
  );
}
