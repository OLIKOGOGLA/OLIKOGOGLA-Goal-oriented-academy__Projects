// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// import React, { useState, useEffect } from 'react';

// // Bonus: useState-ში გადაეცით product ობიექტი,
// // მაგალითად
// // {name : 'cola',
// // price : 2,
// // amount: 200,}
// // ეს ინფორმაცია უნდა ჩანდეს საიტზე, ამავდროულად უნდა შეგეძლოთ სახელის, ფას
// // ის და რაოდენობის ცვლილება, საიტიდანვე, როგორც დღევანდელ გაკვეთილზე გავაკეთეთ.

// function App() {
//   const [product, setProduct] = useState({
//     name: 'Cola',
//     price: 2,
//     amount: 200,
//   });

  
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setProduct((prevProduct) => ({
//       ...prevProduct, 
//       [name]: name === 'name' ? value : Number(value), 
//     }));
//   };

//   return (
//     <div >
//       <h2>Product Information</h2>
//       <p>Name: <strong>{product.name}</strong></p>
//       <p>Price: <strong>${product.price}</strong></p>
//       <p>Amount: <strong>{product.amount}</strong></p>


//       <h3>Edit Product</h3>
//       <div >
//         <input
//           type="text"
//           name="name"
//           value={product.name}
//           onChange={handleChange}
//           placeholder="Product Name"
//         />
//         <input
//           type="number"
//           name="price"
//           value={product.price}
//           onChange={handleChange}
//           placeholder="Price"
//         />
//         <input
//           type="number"
//           name="amount"
//           value={product.amount}
//           onChange={handleChange}
//           placeholder="Amount"
//         />
//       </div>
//     </div>
//   );
// }

// export default App;