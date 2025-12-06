# TP Gestion de Stock

## Description
This is a **Stock Management Web Application** built as a school TP using **React**, **Vite**, and **TailwindCSS v4**.  
It allows users to manage products with a **simple CRUD system** (Create, Read, Update, Delete) and view key stock information on a dashboard.  

This project uses **localStorage** as a database to persist products between sessions.  

---

## Features
- **Dashboard:** Summary of total products, total quantity, and stock value.
- **Products List:** View all products in a clean grid layout.
- **Add Product:** Add new products with fields: name, quantity, price, and image.
- **Delete Product:** Remove products easily.
- **TailwindCSS Styling:** Modern and responsive UI.
- **LocalStorage:** Simple data persistence without backend.

---

## Project Structure

src/
│── App.jsx
│── main.jsx
│── index.css
│
├── components/
│ ├── Navbar.jsx
│ ├── ProductCard.jsx
│ └── ProductForm.jsx
│
├── pages/
│ ├── Dashboard.jsx
│ ├── ProductsList.jsx
│ └── AddProduct.jsx
│
└── utils/
└── storage.js

yaml
Copy code

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
1. Clone the repository:
```bash
git clone <your-repo-url>
Install dependencies:

bash
Copy code
npm install
or

bash
Copy code
yarn
Run the development server:

bash
Copy code
npm run dev
or

bash
Copy code
yarn dev
Open in browser:

arduino
Copy code
http://localhost:5173
Usage
Navigate through the Navbar to access:

Dashboard

Products List

Add Product

Use the Add Product form to insert new products.

The Products List page displays all products with an option to delete them.

The Dashboard shows:

Total number of products

Total quantity of items

Total stock value

Technologies Used
React - Frontend framework

Vite - Build tool for React

TailwindCSS v4 - Styling

localStorage - Data persistence

Next Improvements (Future Features)
Add product images and preview

Edit product details

Sort products by price, quantity, or name

Search/filter products

Add categories

Export stock report (PDF or CSV)

More responsive and modern UI

Author
Soultane Raqi – School TP project

Contact: soultaneraqi1@gmail.com
