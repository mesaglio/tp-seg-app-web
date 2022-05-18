import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import Api from "./Services/Api";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "fullName",
    headerName: "Full name",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon" },
  { id: 2, lastName: "Lannister", firstName: "Cersei" },
  { id: 3, lastName: "Lannister", firstName: "Jaime" },
  { id: 4, lastName: "Stark", firstName: "Arya" },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys" },
  { id: 6, lastName: "Melisandre", firstName: null },
  { id: 7, lastName: "Clifford", firstName: "Ferrara" },
  { id: 8, lastName: "Frances", firstName: "Rossini" },
  { id: 9, lastName: "Roxie", firstName: "Harvey" },
];

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }

  function filterUsers(e) {
    if (e.keyCode === 13) {
      getUsers(searchValue);
    }
  }

  async function getUsers(username) {
    const params = {
      username: username,
    };

    await Api.get("/users", username ? { params } : "");
    //Set users state
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <TextField
        id="outlined-basic"
        label="Search user name"
        variant="outlined"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={(e) => filterUsers(e)}
      />
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
