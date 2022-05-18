import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from "../Images/PageNotFound.jpg";

function NotFound() {
  return (
    <div>
      <img src={PageNotFound} class="center" />
      <p style={{ textAlign: "center" }}>
        <Link to="/">Go to Home </Link>
      </p>
    </div>
  );
}

export default NotFound;
