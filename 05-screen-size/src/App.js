import React, { useState, useEffect } from 'react';

const App = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // This effect runs once when the component mounts
    window.addEventListener('resize', () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    });
    // Immediately invoke the function to set initial values
    (() => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    })();

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', () => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
      });
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <div className='bg-slate-900 min-h-screen space-y-5 p-5'>
      <p className='w-10/12 text-green-300 bg-slate-700 text-2xl font-mono py-1 mx-auto rounded text-center capitalize'>Width of screen: <span>{width}</span></p>
      <p className='w-10/12 text-green-300 bg-slate-700 text-2xl font-mono py-1 mx-auto rounded text-center capitalize'>Height of screen: <span>{height}</span></p>
    </div>
  );
};

export default App;