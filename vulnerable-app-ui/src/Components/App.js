import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import UsersTable from "./UsersTable";
import NotFound from "./NotFound";
import NavBar from "./NavBar";
import MoviesTable from "./MoviesTable";
import AddMovieForm from "./AddMovieForm";
import { getToken, isAdmin } from "./Utils";

function App() {
  //let isLoggedIn = getToken() !== null;
  let isLoggedIn = true; //For testing

  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="login" element={<SignIn />} />
      <Route
        path="users"
        element={
          isLoggedIn ? ( //Agregar la condicion del role admin de la DB
            <>
              <NavBar />
              <UsersTable />
            </>
          ) : (
            <SignIn />
          )
        }
      />
      <Route
        path="movies"
        element={
          isLoggedIn ? (
            <>
              <NavBar />
              <MoviesTable />
            </>
          ) : (
            <SignIn />
          )
        }
      />
      <Route
        path="addmovie"
        element={
          isLoggedIn && isAdmin() ? (
            <>
              <NavBar />
              <AddMovieForm />
            </>
          ) : isLoggedIn && !isAdmin() ? (
            <NotFound />
          ) : (
            <SignIn />
          )
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
