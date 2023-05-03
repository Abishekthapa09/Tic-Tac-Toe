import Square from "./Square";
import { useState } from "react";
import './Square.css';
import calculateWinnner from "./calculateWinner";



const Board=()=>{
    const[xIsNext,setXIsNext]=useState(true);
    const[squares,setSquares]=useState(Array(9).fill(null));

    const handleClick=(i)=>{
        if(squares[i] || calculateWinnner(squares)){
            return;
        }
        const nextSquares=squares.slice();
        if(xIsNext){
        nextSquares[i]="X";
        }else{
            nextSquares[i]='O';
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }    
    
    const winner =calculateWinnner(squares);
    let status;
    if(winner){
        status="Winner is: "+ winner;
    }
    else{
        status = "Player: "+(xIsNext?"X":"O");
        
        
    }
    const resetBoard=()=>{
        setSquares(Array(9).fill(null));
        if(winner==="X"){
        setXIsNext(true);
        }else{
            setXIsNext(false);
        }
    }
    return(
        <div className=" grid grid-cols-1">
        <span className=" border-2 rounded-xl border-blue-200 text-white font-serif text-2xl bg-green-700 align-bottom py-2 mx-16 mb-6 inline-block px-3/4 cursor-none">{status}</span>
        <section className="border-blue-300 border-4 inline  mx-auto">
  <div  className="board-row">
   <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
   <Square value={squares[1]} onSquareClick={()=>handleClick(1)}></Square>
   <Square value={squares[2]} onSquareClick={()=>handleClick(2)}></Square>
   </div>
   <div  className="board-row">
   <Square value={squares[3]} onSquareClick={()=>handleClick(3)}></Square>
   <Square value={squares[4]} onSquareClick={()=>handleClick(4)}></Square>
   <Square value={squares[5]} onSquareClick={()=>handleClick(5)}></Square>
   </div>
   <div  className="board-row">
   <Square value={squares[6]} onSquareClick={()=>handleClick(6)}></Square>
   <Square value={squares[7]} onSquareClick={()=>handleClick(7)}></Square>
   <Square value={squares[8]} onSquareClick={()=>handleClick(8)}></Square>
   </div>
   </section>
   <button className='inline  rounded-xl font-sans  text-lg bg-blue-900 hover:scale-125 duration-100 cursor-pointer  text-white px-4 mx-auto mt-8 p-1 font-semibold' onClick={resetBoard}>Play Again</button>
   </div>
    );
}
export default Board;