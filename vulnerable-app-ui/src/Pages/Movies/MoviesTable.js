import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import api from "../../Services/Api";
import { getToken } from "../../Utils/Utils";

const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 130 },
];

export default function MoviesTable() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies();
    }, []);

    async function getMovies() {
        api
            .get("/movie", {
                headers: { JWT: `${getToken()}` },
            })
            .then((response) => {
                setMovies(response.data);
            })
            .catch(() => {
                alert("Failed on fetching movies!");
            });
    }

    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid
                rows={movies}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}
