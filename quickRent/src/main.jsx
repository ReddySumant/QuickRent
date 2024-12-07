import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Categories from "./Pages/Categories.jsx";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AdminLogin from "./Pages/AdminLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Contact from "./Pages/Contact.jsx";
import Orders from "./components/Orders.jsx";
import Address from "./components/Address.jsx";
import Profile from "./components/Profile.jsx";
import ConflictHandlingPage from "./components/ConflictHandlingPage.jsx";

import SellerLayout from "./components/seller/SellerLayout";
import Dashboard from "./components/seller/Dashboard";
import AddItem from "./components/seller/AddItem";
import { ItemProvider } from "./context/ItemContext";
import AddDocumentForm from "./components/seller/AddDocumentForm";
import SellerProfile from "./components/seller/sellerProfile.jsx";

import { DashNav } from "./components/DashNav.jsx";
import SearchAndFilter from "./components/SearchAndFilter";
import AddAdmin from "./components/AddAdmin";
import AddCategory from "./components/AddCategory";

// const orderData = {
//   productImage: "/images/Category page images/yellow-chair.jpg",
//   productTitle: "A1S Cushioned Lounge Chair",
//   brandName: "Green Soul",
//   modelName: "Amaze",
//   sellerName: "CDAC",
//   orderNumber: "ORD123456789",
//   orderDate: "2024/11/28",
//   rentalDuration: { from: "2024/12/01", to: "2024/12/10" },
//   renterName: "Sumant Reddy",
//   renterEmail: "reddysumant25@gmail.com",
//   renterPhone: "+91-9970222965",
//   address:
//     "311, Niwara Society, Balaji Nagar, Pune, Maharashtra, India - 411043",
//   sellerFullName: "Shreeram Mahadik",
// };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ItemProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/userinfo" element={<Profile />} />
          <Route path="/useraddr" element={<Address />} />
          <Route path="/userorders" element={<Orders />} />
          <Route
            path="/conflicthandlingform"
            element={<ConflictHandlingPage />}
          />

          <Route path="/seller" element={<SellerLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-item" element={<AddItem />} />
            <Route path="add-document-form" element={<AddDocumentForm />} />
            <Route path="profile" element={<SellerProfile />} />
          </Route>


          
      
     
        <Route path="/admin" element={<SearchAndFilter />} />
        <Route path="/admin/add-admin" element={<AddAdmin />} />
        <Route path="/admin/add-category" element={<AddCategory />} />
      
    
          
        </Routes>
      </Router>
    </ItemProvider>
  </React.StrictMode>
);
