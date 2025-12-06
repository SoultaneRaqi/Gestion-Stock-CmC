export default function Navbar({ setPage }) {
  return (
    <nav className="bg-gray-900 text-white p-4 flex gap-6">
      <button onClick={() => setPage("dashboard")} className="hover:text-blue-400">
        Dashboard
      </button>
      <button onClick={() => setPage("list")} className="hover:text-blue-400">
        Products
      </button>
      <button onClick={() => setPage("add")} className="hover:text-blue-400">
        Add Product
      </button>
    </nav>
  );
}
