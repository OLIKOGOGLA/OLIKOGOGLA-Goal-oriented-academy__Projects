import React from "react";
import { useState } from "react";

function App() {
  const [list, setList] = useState(['A', 'B', 'C', 'D', "E"]);

//   ბოლო ელემენტის წაშლა slice ფუნქციით
  const removeLast = () => {
    setList(list.slice(0, -1));
  };
// 1. ღილაკი, რომელიც ამატებს რამე (ყოველთვის ერთიდაიგივეს) ელემენტს სიაში.
 
  const addStaticItem = () => {
    setList([...list, "New Item"]);
  };

  // 2. კიდევ ერთი ღილაკი, რომელიც ამატებს Random რიცხვს სიაში.
  const addRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100); 
    setList([...list, randomNum]);
  };

  return (
    <>
      <ol>
        {list.map((char, index) => (
          <li key={index}>{char}</li>
        ))}
      </ol>

      <button onClick={removeLast}>Remove Last Element</button>
      <button onClick={addStaticItem}>Add "New Item"</button>
      <button onClick={addRandomNumber}>Add Random Number</button>
    </>
  );
}

export default App;


