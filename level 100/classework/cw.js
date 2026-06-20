import { useState } from 'react';

// 1. თქვენი სიტყვებით ახსენით რა არის და რას აკეთებს useEffect()

// useEffect არის ადგილი სადაც მაგალითად რაღაცეები მოგვაქვს და ტაიმერს ვაყენებთ
// (ანუ ადგილი სადაც ისეტ რაღაცას ვაკეთებთ რაც საიტზე არ გამოგვაქ)



// 2. useState-ში საწყის მნიშვნელობათ გქონდეთ ეს ობიექტი - {name:'luka', age: 15}
//  და ღილაკზე დაჭერის დროს ასაკს ემატებოდეს 1.
export default function App() {
//  const[count,setcount]= useState({ name: 'luka', age: 15 })

//  const growUp = () => {
//   setUser({
//     ...user,       
//     age: user.age + 1 
//   });
// };

// bonus:
// // 3. useEffect()-ის მარტივი მაგალითი.

  const [count, setCount] = useState(0);

  useEffect(() => {
   
    document.title = `Count: ${count}`;
    
    console.log("Title has changed!");
  }, [count]);


  return (
    <>
      <section>
      <div>
      <h1>name: {user.name}</h1>
      <p>age: {user.age}</p>
      <button onClick={growUp}>+1 age</button>
    </div>
    <div>
      <p>Click the button to change the title</p>
      <button onClick={() => setCount(count + 1)}>
        Increment ({count})
      </button>
    </div>
      </section>
    </>
  );
}
