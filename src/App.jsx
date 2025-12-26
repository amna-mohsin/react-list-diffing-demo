import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
    { id: 4, name: "Date" },
  ]);

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Fruit List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} 
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
