import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import api from "../../Services/Api";
import RolesDropdown from "../Components/RolesDropdown";
import { getToken } from "../../Utils/Utils";

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

export default function UsersTable() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    async function getUsers() {
        await api
            .get("/user", {
                headers: { JWT: `${getToken()}` },
            })
            .then((response) => {
                setUsers(response.data);
            })
            .catch(() => {
                alert("Failed on fetching users!");
            });
    }

    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}
