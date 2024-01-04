// import logo from './logo.svg';
// import './App.css';
// import { useState, useEffect } from 'react';

// function App() {
//   const [allImage, setAllImage] = useState([])
//   const [showImage, setShowImage] = useState(true)
//   console.log(window.screen.availWidth)
//   const getImage = async () => {
//     try {
//       let res = await fetch(`https://picsum.photos/250/250`)
//       let url = res.url
//       setAllImage(pre => [...pre, url])
//       console.log(url)
//     } catch (error) {

//     }
//   };
//   useEffect(()=>{
//     getImage()
//   },[])
//   return (
//     <div className='bg-slate-800 flex flex-wrap gap-5 min-h-screen items-start p-4'>
//       {
//         allImage.map((url) => {
//           return <img src={url} alt='' />
//         }
//         )}
//     </div>
//   );
// }

// export default App;
