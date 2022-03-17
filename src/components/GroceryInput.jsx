import React from "react";

function GroceryInput({ handleAdd }) {
  const [input, setinput] = React.useState("");
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <button onClick={() => handleAdd(input)}>Add</button>
    </div>
  );
}

export { GroceryInput };
