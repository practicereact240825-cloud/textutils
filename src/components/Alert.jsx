import React from "react";

function Alert({ message, type = "dark" }) {
  if (!message) return null;
  return (
    <>
      <div className={`alert alert-${type == ""? "dark" : type}`} role="alert">
        {message}
      </div>
    </>
  );
}

export default Alert;
