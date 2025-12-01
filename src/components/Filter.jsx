import { useState } from "react";

function Filter() {
   
   const numbers = [10, 12, 14, 16, 18, 20];
  const filter = numbers.filter((num) => num % 2 == 0);
  const items = ["Mango", "Apple", "Sugar-Apple", "Kiwi", "Pinneapple"];
  return (
    <div>
      <h2> FILTER</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
        <p>Even number : {filter.join(" ; ")} </p>
    </div>
  );
  

}

export default Filter;