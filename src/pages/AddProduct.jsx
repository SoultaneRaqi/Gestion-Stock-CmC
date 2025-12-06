import ProductForm from "../components/ProductForm";
import { addProduct } from "../utils/storage";

export default function AddProduct() {
  const handleSubmit = (product) => {
    addProduct(product);
    alert("Product added");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Add Product</h1>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
}
