import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import UsersTable from "./Pages/Users/UsersTable";
import NotFound from "./Pages/NotFound/NotFound";
import NavBar from "./Pages/Components/NavBar";
import MoviesTable from "./Pages/Movies/MoviesTable";
import AddMovieForm from "./Pages/AddMovie/AddMovieForm";
import { isLoggedIn, isAdmin, isEnterprise, getUserRole, Roles } from "./Utils/Utils";

function App() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="login" element={<SignIn />} />
            <Route
                path="users"
                element={
                    isLoggedIn() && getUserRole() === Roles.Admin ? (
                        <>
                            <NavBar />
                            <UsersTable />
                        </>
                    ) : isLoggedIn() && getUserRole() !== Roles.Admin ? (
                        <NotFound />
                    ) : (
                        <SignIn />
                    )
                }
            />
            <Route
                path="movies"
                element={
                    isLoggedIn() ? (
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
                    isLoggedIn() && isEnterprise() ? (
                        <>
                            <NavBar />
                            <AddMovieForm />
                        </>
                    ) : isLoggedIn() && !isAdmin() ? (
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
