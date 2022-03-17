import React from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryItem } from "./GroceryItem";
import { v4 as uuid } from "uuid";

function Grocery() {
  const [data, setdata] = React.useState([]);

  function handleAdd(title) {
    const payload = {
      title: title,
      status: false,
      id: uuid(),
    };
    let newdata = [...data, payload];
    setdata(newdata);
  }
  function handleToggle(id) {
    let newdata = data.filter((item, idx) => {
      return item.id !== id;
    });
    setdata(newdata);
  }
  return (
    <div>
      <GroceryInput handleAdd={handleAdd} />
      {data.map((item) => (
        <GroceryItem {...item} key={item.id} handleToggle={handleToggle} />
      ))}
    </div>
  );
}

export { Grocery };
