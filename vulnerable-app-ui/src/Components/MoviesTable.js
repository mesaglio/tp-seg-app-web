import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import api from "./Services/Api";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
];

const rows = [
  { id: 1, name: "Harry Potter", firstName: "Jon" },
  { id: 2, name: "Titanic", firstName: "Cersei" },
  { id: 3, name: "Scary Movie", firstName: "Jaime" },
];

export default function MoviesTable() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    api.get("/movies");
    //Set movies state
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
