import React from "react";
import { Link } from "react-router-dom";
const Missing = () => {
  return (
    <main className="Missing">
      <h2>404...Page Not Found</h2>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </main>
  );
};

export default Missing;
