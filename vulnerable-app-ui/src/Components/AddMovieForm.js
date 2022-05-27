import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import api from "./Services/Api";
import { getToken } from "./Utils";

function AddMovieForm() {
  const [movieName, setMovieName] = useState("");

  function handleInputChange(event) {
    setMovieName(event.target.value);
  }

  const handleOnSave = () => {
    addMovie();
  };

  async function addMovie() {
    let body = {
      name: movieName,
    };

    api
      .post("/movies", body, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      .then(() => {
        setMovieName("");
        alert("Movie added successfully!");
      })
      .catch(() => {
        alert("Failed on adding movie!");
      });
  }

  return (
    <div className="add-movie-form">
      <form>
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Movie name"
          value={movieName}
          onChange={handleInputChange}
          variant="outlined"
        />
        <br />
        <Button variant="contained" color="primary" onClick={handleOnSave}>
          ADD
        </Button>
      </form>
    </div>
  );
}

export default AddMovieForm;
