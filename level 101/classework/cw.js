// // შექმენით ჩვეულებრივი counter, + და - ღილაკით, ასევე რიცხვით რომელსაც ემატება და აკლდება,
// // შემდეგ დაამატეთ useEffect, რომელიც ამ რიცხვის ყველა ცვლილების დროს კონსოლში გამოიტანს მის მნიშვნელობას.
// import React, { useState, useEffect } from 'react';

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(count);
//   }, [count]);

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setCount(count - 1)}>-</button>
//     </div>
//   );
// }

 
// import React, { useState, useEffect } from 'react';

// export default function file () {
//   const [name, setName] = useState('');

//   useEffect(() => {
//     console.log(5);
//   }, [name]);

//   return (
//     <div>
//       <input 
//         type="text" 
//         value={name} 
//         onChange={(e) => setName(e.target.value)} 
//       />
//       <p>Current State: {name}</p>
//     </div>
//   );
// }
