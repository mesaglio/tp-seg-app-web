import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";
import UsersTable from "./Components/UsersTable";
import NotFound from "./Components/NotFound";
import RolesTable from "./Components/RolesTable";
import NavBar from "./Components/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));

const pathname = window.location.pathname;

root.render(
  <BrowserRouter>
    {pathname === "/users" || pathname === "/roles" ? <NavBar /> : null}
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="login" element={<SignIn />} />
      <Route path="users" element={<UsersTable />} />
      <Route path="roles" element={<RolesTable />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
