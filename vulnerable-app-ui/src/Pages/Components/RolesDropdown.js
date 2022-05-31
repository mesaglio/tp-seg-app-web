import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import api from "../../Services/Api";
import { getToken } from "../../Utils/Utils";

export default function RolesDropdown(props) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    console.log(props);
    setRole(props.row.role);
    setEmail(props.row.emails);
  }, []);

  async function updateUserRole(newRole) {
    let body = {
      role: newRole,
    };

    await api
      .put(`/user?email=${email}`, body, {
        headers: { JWT: `${getToken()}` },
      })
      .then(() => {
        setRole(newRole);
        alert("User role updated successfully!");
      })
      .catch(() => {
        alert("Failed on updating user role!");
      });
  }

  const handleChange = (event) => {
    updateUserRole(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 140 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Roles</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"Admin"}>Admin</MenuItem>
          <MenuItem value={"Enterprise"}>Enterprise</MenuItem>
          <MenuItem value={"User"}>User</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
