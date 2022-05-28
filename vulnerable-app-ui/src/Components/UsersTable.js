import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import api from "./Services/Api";
import RolesDropdown from "./RolesDropdown";
import { getToken } from "./Utils/Utils";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "emails", headerName: "Email", width: 200 },
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
    emails: "jonsnow1234@gmail.com",
    role: "User",
  },
  {
    id: 2,
    emails: "abcd2@gmail.com",
    role: "Admin",
  },
  {
    id: 3,
    emails: "abcd3@gmail.com",
    role: "User",
  },
  {
    id: 4,
    emails: "abcd4@gmail.com",
    role: "User",
  },
  {
    id: 5,
    emails: "abcd5@gmail.com",
    role: "Enterprise",
  },
  {
    id: 6,
    emails: "abcd6@gmail.com",
    role: "Enterprise",
  },
  {
    id: 7,
    emails: "abcd7@gmail.com",
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
      .get("/user", {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
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
        rows={rows} //TODO: Change it to users state
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
