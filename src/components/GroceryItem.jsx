import React from "react";

function GroceryItem({ title, status, id, handleToggle }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{status ? "Completed" : "Not completed"}</h3>
      <button onClick={() => handleToggle(id)}>Delete</button>
    </div>
  );
}

export { GroceryItem };
