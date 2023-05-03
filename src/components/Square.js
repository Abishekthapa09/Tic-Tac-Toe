import './Square.css';
function Square({ value, onSquareClick }) {
    return (
      <button className="Square  text-5xl" onClick={onSquareClick}>
      {value}
      </button>
    );
  }
  export default Square;