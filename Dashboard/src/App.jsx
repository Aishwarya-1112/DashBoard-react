import React from "react";
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
  return (
    <Router>
      <div className="bg-gray-200 text-gray-900 h-screen px-6 py-5 mx-2 my-4 fixed w-16 md:w-64 border-r border-gray-300 top-0">
        <div className="text-3xl space-x-4 font-bolder hidden md:block">
          XYZ Shop
        </div>

        <ul className="flex flex-col mt-5 text-xl list-none">
          <li>
            <Link
              to="/dash"
              className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer no-underline"
            >
              <SpeedIcon className="mx-3" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer no-underline"
            >
              <ShoppingCartIcon className="mx-3" />
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link
              to="/customers"
              className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer no-underline"
            >
              <Groups2Icon className="mx-3" />
              <span>Customer</span>
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer no-underline"
            >
              <PersonIcon className="mx-3" />
              <span>User</span>
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer no-underline"
            >
              <Inventory2Icon className="mx-3" />
              <span>Product</span>
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer no-underline"
            >
              <SettingsSuggestIcon className="mx-3" />
              <span>Setting</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="ml-64 p-5">
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
    </Router>
  );
};

export default App;
