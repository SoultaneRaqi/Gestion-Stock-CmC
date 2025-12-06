const KEY = "products";

export function getProducts() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function saveProducts(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function addProduct(product) {
  const items = getProducts();
  items.push(product);
  saveProducts(items);
}

export function removeProduct(id) {
  const items = getProducts().filter(p => p.id !== id);
  saveProducts(items);
}

export function updateProduct(updated) {
  const items = getProducts().map(p =>
    p.id === updated.id ? updated : p
  );
  saveProducts(items);
}
