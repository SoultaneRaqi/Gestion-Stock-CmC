import { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import ProductsList from "./pages/ProductsList";
import AddProduct from "./pages/AddProduct";
/* coMMENT JUST FOR TEST  */
export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setPage={setPage} />

      <div className="p-6">
        {page === "dashboard" && <Dashboard />}
        {page === "list" && <ProductsList />}
        {page === "add" && <AddProduct />}
      </div>
    </div>
  );
}
