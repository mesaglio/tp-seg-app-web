import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import Api from "./Services/Api";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "roleName", headerName: "Name", width: 130 },
];

const rows = [
  { id: 1, roleName: "Admin" },
  { id: 2, roleName: "Dev" },
  { id: 3, roleName: "Test" },
  { id: 4, roleName: "User" },
];

export default function RolesTable() {
  const [roles, setRoles] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getRoles();
  }, []);

  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }

  function filterRoles(e) {
    if (e.keyCode === 13) {
      getRoles(searchValue);
    }
  }

  async function getRoles(name) {
    const params = {
      name: name,
    };

    await Api.get("/roles", name ? { params } : "");
    //Set roles state
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <TextField
        id="outlined-basic"
        label="Search user name"
        variant="outlined"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={(e) => filterRoles(e)}
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
