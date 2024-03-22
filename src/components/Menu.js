import React from "react";
import "./Menu.css"; // Importing the CSS file for styling

const menuItems = {
  pitaWraps: [
    { name: "Beef Donair", prices: [8.5, 10.5, 12.5, 16.99] },
    { name: "Chicken Shawarma", prices: [8.5, 10.5, 12.5, 16.99] },
    { name: "Tenderloin Steak", prices: [9.99, 12.99, 16.99] },
    { name: "Shish Tawook", prices: [8.99, 11.99, 14.99] },
    { name: "Kofta Kabab", prices: [8.99, 11.99, 14.99] },
    { name: "Regular Falafel", prices: [6.99, 8.99, 10.99] },
    { name: "Stuffed Falafel", prices: [7.99, 9.99, 11.99] },
    { name: "Grilled Chicken", prices: [12.5] },

    // Add the rest of the Pita Wraps here
  ],
  platters: [
    { name: "Beef Donair Platter", prices: [13.5, 15.5] },
    { name: "Chicken Shawarma Platter", prices: [13.5, 15.5] },
    { name: "Tenderloin Steak Platter", prices: [16.99, 19.99] },
    { name: "Boneless Lamb Platter", prices: [16.99, 19.99] },

    { name: "Shish Tawook Platter", prices: [14.5, 16.5] },
    { name: "Kofta Kabab Platter", prices: [14.5, 16.5] },
    { name: "Grilled Chicken Platter", prices: [14.5, 16.5] },
    // Add the rest of the Platters here
  ],

  specialPlatters: [
    { name: "Chicken Shawarma Fries/Poutine", prices: [10.99, 14.99] },
    { name: "Beef Donair Fries/Poutine", prices: [10.99, 14.99] },
    { name: "Chicken Shawarma Poutine", prices: [10.99, 14.99] },
    {
      name: "Vegetarian Platter",
      prices: [13.99],
      description:
        "Comes with 4 Falafels, Salad, Hummus, Garlic Potat/Fries/Rice",
    },
    {
      name: "Shawarma Bites",
      prices: [14.99],
      description: "Comes with Salad and Fries",
    },
    { name: "Chicken Shawarma Salad", prices: [10.5, 12.5] },
    { name: "Beef Donair Salad", prices: [10.5, 12.5] },
  ],
  salads: [
    { name: "Fatoush", prices: [6.5, 8.5] },
    { name: "Tabouli", prices: [6.5, 8.5] },
    { name: "Cesar Salad", prices: [7.5, 8.5] },
    { name: "Greek Salad", prices: [9.99, 12] },
  ],
  Desserts: [
    { name: "Baklava", prices: [1 + "pc: " + 1.25, 6 + "pc" + 6] },
    { name: "Nanimo bar", prices: [1 + "pc: " + 1.99] },

    { name: "Brownie", prices: [1 + "pc: " + 2.99] },
  ],
  Beverages: [
    { name: "Can of Pop", prices: [1.5] },
    { name: "Milkis ", prices: [2.25] },

    { name: "Bottle Pop/juice", prices: [2.99] },
    { name: "Ayran", prices: [2.99] },
    { name: "Water", prices: [1.5] },
  ],
  Dips: [
    { name: "Hummus", prices: [5.5, 8.5], description: "comes with one pita" },
    { name: "Tahini", prices: [5.5, 8.5] },
    { name: "Garlic Paste", prices: [4.99] },

    { name: "Sweet Sauce", prices: [3.99, 6.99] },
    { name: "Garlic Sauce", prices: [5.5, 8.5] },

    { name: "Taziki Sauce", prices: [5.5, 8.5] },
  ],
  // Add other categories here
};

const renderMenuItem = (item) => (
  <div className="menu-item">
    <h3>{item.name}</h3>
    <p>{item.prices.join(", ")}</p>
    <h6>{item.description}</h6>
  </div>
);

const Menu = () => (
  <div className="menuforsale">
    <h2>Pita Wraps & Sandwiches</h2>
    {menuItems.pitaWraps.map(renderMenuItem)}
    <h2>Platters</h2>
    <h6 className="text-center max-w-30px">
      All platters come with rice, meat, a choice of two sauces and garden
      salad/garlic potato
    </h6>
    {menuItems.platters.map(renderMenuItem)}
    <h2>Special Platters</h2>
    {menuItems.specialPlatters.map(renderMenuItem)}
    {/* Render other categories in a similar way */}
  </div>
);

export default Menu;
