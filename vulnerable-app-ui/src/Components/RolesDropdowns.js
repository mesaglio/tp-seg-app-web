import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import api from "./Services/Api";

export default function RolesDropdown(props) {
  const [role, setRole] = React.useState("");

  useEffect(() => {
    console.log(props);
    setRole(props.row.role);
  }, []);

  async function updateUser() {
    // let body = {
    //  role: role,
    // };
    // Update user role
    //api.put("/users", body);
  }

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Roles</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={role}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"User"}>User</MenuItem>
          <MenuItem value={"Enterprise"}>Enterprise</MenuItem>
          <MenuItem value={"Admin"}>Admin</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
