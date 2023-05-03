import './App.css';
import Board from './components/Board';
import React from 'react';

function App() {
 
  
  return (
    <>
    <div className="grid grid-cols-1 mx-auto text-center w-3/4 mt-10">
    <div className="mt-4">   
     <h1 className=" text-5xl text-blue-800 font-bold animate-bounce"> Tic-Tac-Toe</h1>
    </div>
    <div className=" border-8 border-red-800 mx-80 my-4  py-4 pb-8 rounded-3xl"><Board /></div>
    
    </div>
    </>
  );
}

export default App;
