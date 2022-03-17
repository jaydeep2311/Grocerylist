import React from "react";
function Child({ value, handleDecrement, handleIncrement }) {
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default function Childtoparent() {
  const [count, setcount] = React.useState(0);
  function handlechange(val) {
    setcount(count + val);
  }
  return (
    <div>
      <h1>Child to parent</h1>
      <Child
        value={count}
        handleIncrement={() => handlechange(1)}
        handleDecrement={() => handlechange(-1)}
      />
    </div>
  );
}
