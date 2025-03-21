import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SpeedIcon from "@mui/icons-material/Speed";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Groups2Icon from "@mui/icons-material/Groups2";
import PersonIcon from "@mui/icons-material/Person";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import Dash from "./Dash";

const Orders = () => <div>Orders Page</div>;
const Customers = () => <div>Customers Page</div>;
const Users = () => <div>Users Page</div>;
const Products = () => <div>Products Page</div>;
const Settings = () => <div>Settings Page</div>;

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the burger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Router>
        {/* Button to toggle burger menu on mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-4 text-white bg-blue-500 rounded-md"
        >
          ☰ {/* Burger Icon */}
        </button>

        {/* Main Layout */}
        <div className="flex h-screen">
          {/* Sidebar */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              isOpen ? "w-64" : "hidden"
            } lg:w-64 bg-gray-400 text-gray-900 p-4 border-r border-gray-400 h- sm:w-15`}
          >
            <div className="text-3xl font-bold mb-6 hidden lg:block">
              XYZ Shop
            </div>

            <ul className="space-y-5 w-15 px-0">
              <li>
                <Link
                  to="/dash"
                  className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer no-underline"
                >
                  <SpeedIcon />
                  <span className="hidden sm:inline">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/orders"
                  className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer no-underline"
                >
                  <ShoppingCartIcon />
                  <span className="hidden sm:inline">Orders</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/customers"
                  className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer no-underline"
                >
                  <Groups2Icon />
                  <span className="hidden sm:inline">Customers</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/users"
                  className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer no-underline"
                >
                  <PersonIcon />
                  <span className="hidden sm:inline">Users</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer no-underline"
                >
                  <Inventory2Icon />
                  <span className="hidden sm:inline">Products</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer no-underline"
                >
                  <SettingsSuggestIcon />
                  <span className="hidden md:inline">Settings</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-3 ml-3 bg-white">
            <Routes>
              <Route
                path="/dash"
                element={<Dash />}
              />
              <Route
                path="/orders"
                element={<Orders />}
              />
              <Route
                path="/customers"
                element={<Customers />}
              />
              <Route
                path="/users"
                element={<Users />}
              />
              <Route
                path="/products"
                element={<Products />}
              />
              <Route
                path="/settings"
                element={<Settings />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
