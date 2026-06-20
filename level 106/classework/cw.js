// // import { useState , useEffect } from "react";
// // Task:
// // Create separate state variables for menu, friends, and newsFeed.
// // Remove the data object.
// // Update the JSX to use the new state variables
// // .Task:
// // Create three separate useEffect() hooks.
// // Each effect should be responsible for only one API request.
// // Keep the same functionality.


// function App() {
// //   const [data, setData] = useState({
// //   menu: [],
// //   friends: [],
// //   newsFeed: []
// // });
// // useEffect(() => {
// //   get('/menu').then(res => setMenu(res.data));
// //   get('/friends').then(res => setFriends(res.data));
// //   get('/news-feed').then(res => setNewsFeed(res.data));
// // }, []);
//     const [ menu,setmenu] = useState('');
//     useEffect(() => {
//      get('/menu').then(res => setMenu(res.data));
//     });
//     const [ friends,setfriends] = useState('');
//     useEffect(() => {
//      get('/friends').then(res => setFriends(res.data));
//     });
//     const [ newsFeed,setnewsFeed] = useState('');
//     useEffect(() => {
//     get('/news-feed').then(res => setNewsFeed(res.data));
//     });

// // 




//   // const [theme, setTheme] = useState('');

  
//   //   useEffect(() => {
//   //     if (theme !== '') {
//   //     localStorage.setItem('theme', theme);
//   //  } });
  

//   return <div>App</div>;
// }
