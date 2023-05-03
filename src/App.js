import './App.css';
import Board from './components/Board';
import React from 'react';
import { useState, useEffect } from 'react';
import './components/Darkmode.css';

function App() {
  
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  const LightTheme = () => {
      setTheme('light');
  };
  const DarkTheme = () => {
    setTheme('dark');
};
useEffect(() => { localStorage.setItem('theme', theme);document.body.className = theme; }, [theme]);

  
  return (
    <><div className={`App ${theme}`}>
      <div className="grid grid-cols-1 mx-auto text-center w-3/4 mt-10">
        <div className="mt-10">
          <h1 className=" text-5xl text-blue-800 font-bold animate-bounce cursor-grab  inline-block"> Tic-Tac-Toe</h1>
        </div>
        <div className=" border-8 border-red-800 mx-80 my-4  py-4 pb-8 rounded-3xl"><Board /></div>
      </div>
      
<div class="inline-flex absolute top-6 right-12 ">
  <button class="bg-gray-300 hover:bg-blue-200 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={LightTheme}>
    Light
  </button>
  <button class="bg-gray-800 hover:bg-blue-950 text-gray-100 font-bold py-2 px-4 rounded-r" onClick={DarkTheme}>
    Dark
  </button>
</div>
      </div>
    </>
  );
}

export default App;
