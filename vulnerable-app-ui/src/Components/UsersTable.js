import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import api from "./Services/Api";
import RolesDropdown from "./RolesDropdown";

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
  {
    field: "role",
    headerName: "Role",
    width: 170,
    renderCell: RolesDropdown,
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    email: "abcd@gmail.com",
    role: "User",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    email: "abcd2@gmail.com",
    role: "Admin",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    email: "abcd3@gmail.com",
    role: "User",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    email: "abcd4@gmail.com",
    role: "User",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    email: "abcd5@gmail.com",
    role: "Enterprise",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    email: "abcd6@gmail.com",
    role: "Enterprise",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    email: "abcd7@gmail.com",
    role: "Enterprise",
  },
];

export default function UsersTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    await api
      .get("/user")
      .then((response) => {
        setUsers(response);
      })
      .catch(() => {
        alert("Failed on fetching users!");
      });
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
