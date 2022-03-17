import React from "react";

function Child({ value }) {
  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
}
function Parenttochild() {
  const [count, setcount] = React.useState(0);
  return (
    <div>
      <h1>Parent to child</h1>
      <Child value={count} />
      <button onClick={() => setcount(count + 1)}>+</button>
      <button onClick={() => setcount(count - 1)}>-</button>
    </div>
  );
}
export { Parenttochild };
