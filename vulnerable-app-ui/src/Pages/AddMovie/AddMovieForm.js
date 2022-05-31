import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import api from "../../Services/Api";
import { getToken } from "../../Utils/Utils";

function AddMovieForm() {
  const [movieName, setMovieName] = useState("");
  const [hasError, setHasError] = useState(false);

  function handleInputChange(event) {
    setMovieName(event.target.value);
  }

  const handleOnSave = () => {
    if (movieName.trim().length > 0) {
      setHasError(false);
      addMovie();
    } else {
      setHasError(true);
    }
  };

  async function addMovie() {
    let body = {
      name: movieName,
    };

    api
      .post("/movie", body, {
        headers: { JWT: `${getToken()}` },
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
          error={hasError}
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Movie name"
          value={movieName}
          onChange={handleInputChange}
          variant="outlined"
          helperText={hasError ? "Complete movie name." : ""}
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
