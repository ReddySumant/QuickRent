import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";
import { DashNav } from "./DashNav";

const SearchAndFilter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const data = [
    { id: 1, category: "Conflicts", orderId: "ORD001", title: "Damaged Item", description: "Received a broken item." },
    { id: 2, category: "Conflicts", orderId: "ORD002", title: "Wrong Product", description: "Delivered the wrong product." },
    { id: 3, category: "Conflicts", orderId: "ORD003", title: "Bad Quality", description: "Quality is not as expected" },
    { id: 4, category: "Conflicts", orderId: "ORD004", title: "Item looks duplicate", description: "It looks like chinese item." },
    { id: 5, category: "Conflicts", orderId: "ORD005", title: "Prodcuct is Broken", description: "Delivered in broken state." },
    { id: 6, category: "Conflicts", orderId: "ORD006", title: "The Battery is dead", description: "Battery is not charging since the product has been delivered" },
    { id: 7, category: "Query", name: "Vinit Agivale", email: "vinit@example.com", phone: "1234567894", queryMessage: "How to return a product?" },
    { id: 8, category: "Query", name: "Sumant Reddy", email: "sumant@example.com", phone: "0987654321", queryMessage: "Need help with payment." },
    { id: 9, category: "Query", name: "Shraddha Jadhav", email: "shraddha@example.com", phone: "1234567893", queryMessage: "How to get back the deposit" },
    { id: 10, category: "Query", name: "Shreeram Mahadik", email: "shreeram@example.com", phone: "1234567892", queryMessage: "Money wasdeducted but the billing page shows failed payment" },
    { id: 11, category: "Query", name: "Ashwini Patil", email: "ashwini@gmail.com", phone: "1234567891", queryMessage: "How to return a product?" },
    { id: 12, category: "Requests", title: "New Laptop", brand: "Dell", model: "XPS 13", description: "I bought this laptop in 2023.It has been properly maintained by me. hence it's in good condition" },
    { id: 13, category: "Requests", title: "Smartphone", brand: "Samsung", model: "Galaxy S21", description: "Phone in good condition. Bought it one month ago" },
    { id: 14, category: "Requests", title: "Washing Machine", brand: "LG", model: "Aquatic", description: "Due to lack of space renting this washing machine" },
    { id: 15, category: "Requests", title: "New Oven", brand: "LG", model: "Italian", description: "In absolute good condition.Can bake upto 500 different type of recipes." },
    { id: 16, category: "Requests", title: "New Cooker", brand: "Hawkins", model: "special ", description: "Still cooks good" }
  ];

  const filteredData = data.filter((item) => {
    const searchText = searchQuery.toLowerCase();

    if (selectedCategory === "All" || item.category === selectedCategory) {
      if (item.category === "Conflicts") {
        return (
          item.orderId.toLowerCase().includes(searchText) ||
          item.title.toLowerCase().includes(searchText) ||
          item.description.toLowerCase().includes(searchText)
        );
      } else if (item.category === "Query") {
        return (
          item.name.toLowerCase().includes(searchText) ||
          item.email.toLowerCase().includes(searchText) ||
          item.phone.includes(searchText) || // Phone numbers are numeric
          item.queryMessage.toLowerCase().includes(searchText)
        );
      } else if (item.category === "Requests") {
        return (
          item.title.toLowerCase().includes(searchText) ||
          item.brand.toLowerCase().includes(searchText) ||
          item.model.toLowerCase().includes(searchText) ||
          item.description.toLowerCase().includes(searchText)
        );
      }
    }

    return false;
  });

  return (
  <div>
    <DashNav />
    <div className="container mt-4">
      {/* Category Buttons */}
      <div className="d-flex justify-content-around mb-4">
        {["All", "Conflicts", "Query", "Requests"].map((category) => (
          <button
            key={category}
            className={`btn ${selectedCategory === category ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="text-center mb-4">
        <input
          type="text"
          className="form-control w-75 mx-auto"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Display Cards */}
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {filteredData.map((item) => (
          <div className="card p-3" key={item.id} style={{ width: "18rem" }}>
            {item.category === "Conflicts" && (
              <>
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Order ID: {item.orderId}</p>
                <p className="card-text">{item.description}</p>
              </>
            )}
            {item.category === "Query" && (
              <>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Email: {item.email}</p>
                <p className="card-text">Phone: {item.phone}</p>
                <p className="card-text">{item.queryMessage}</p>
              </>
            )}
            {item.category === "Requests" && (
              <>
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Brand: {item.brand}</p>
                <p className="card-text">Model: {item.model}</p>
                <p className="card-text">{item.description}</p>
              </>
            )}
          </div>
        ))}
        {filteredData.length === 0 && <p>No results found.</p>}
      </div>
    </div>
    </div>
  );
};

export default SearchAndFilter;
