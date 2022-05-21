import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn";
import UsersTable from "./Components/UsersTable";
import NotFound from "./Components/NotFound";
import NavBar from "./Components/NavBar";
import MoviesTable from "./Components/MoviesTable";
import AddMovieForm from "./Components/AddMovieForm";

const root = ReactDOM.createRoot(document.getElementById("root"));

const pathname = window.location.pathname;

root.render(
  <BrowserRouter>
    {pathname === "/users" ||
    pathname === "/addmovie" ||
    pathname === "/movies" ? (
      <NavBar />
    ) : null}
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="login" element={<SignIn />} />
      <Route path="users" element={<UsersTable />} />
      <Route path="movies" element={<MoviesTable />} />
      <Route path="addmovie" element={<AddMovieForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
