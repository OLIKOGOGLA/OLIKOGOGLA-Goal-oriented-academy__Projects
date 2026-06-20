// გქონდეთ input და text მდგომარეობა (state),
// input შიგნით ტექსტის წერის პარალელურად დროს მისი მნიშვნელობა გახადეთ text state, 
// საიტზე დაამატეთ useEffect, რომელიც text-ის ყოველი განახლების დროს კონსოლში გამოტანს სასურველ რამეს.

// const[inputValue , setInputValue] = useState('');
// const[text , setText] = useState('');

// const handleChange  = (event) => {
//   const value = event.target.value;
//   setInputValue(value);
//   setText(value);
// };
// useEffect(() => {
//   if (text) {
//     console.log( ` ტექსტი განახლდა: ${text} ` );
//   }
// } , [text]);

// <input
// type="text"
// value={inputValue}
// onChange={handleChange}
// placeholder="ჩაწერეთ რაიმე..."
// />

// <div >
// <strong>თქვენ წერთ:</strong> {text}
// </div>

 // const [clickCount, setClickCount] = useState(0);

  // // your code here
  // const increment = () => {
  //   setClickCount(clickCount => clickCount + 1)
  // }

  // useEffect(() => {
  //   document.addEventListener('mousedown', increment)

  //   return () => {
  //     document.removeEventListener('mousedown', increment)
  //   }
  // })  
  
  
  // <h1>Document Clicks: {clickCount}</h1>