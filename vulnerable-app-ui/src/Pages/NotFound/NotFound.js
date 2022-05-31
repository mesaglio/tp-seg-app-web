import React from "react";
import { Link } from "react-router-dom";
import PageNotFound from "../../Images/PageNotFound.jpg";
import { isLoggedIn } from "../../Utils/Utils";

function NotFound() {
  let home = isLoggedIn() ? "/movies" : "/";

  return (
    <div>
      <img src={PageNotFound} class="center" />
      <p style={{ textAlign: "center" }}>
        <Link to={home}>Go to Home</Link>
      </p>
    </div>
  );
}

export default NotFound;
