import React, { useState } from 'react';
import Square from './Square';
import '../winner.css';

const Board = () => {

  const [boardSquare, setBoardSquare] = useState(Array(9).fill(null));
  const [Xturn, setXturn] = useState(true);
  const handleCheck = (index) => {
    const squares = [...boardSquare];
    if(winner || squares[index]) return;
    squares[index] = Xturn ? 'X' : 'O';
    setBoardSquare(squares);
    setXturn(!Xturn);
  }
  const renderSquare = (index) => {
    return <Square value={boardSquare[index]} onClick={() => handleCheck(index)} /> 
  }
  const HandleWinner = (squa) => {
    const winningList = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(let i=0; i< winningList.length; i++) {
        const [a,b,c] = winningList[i];
        if(squa[a] && squa[a] === squa[b] && squa[b] === squa[c])
        {
            return squa[a];
        }
    }
    return null;
}

  let status;
  const winner = HandleWinner(boardSquare);
  const reset = () => {
      setBoardSquare(Array(9).fill(null));
      setXturn(true);
      boardSquare.map((square, index) => (
        <Square value={boardSquare[index]} onClick={() => handleCheck(index)} />
      ));
  }
  status = winner ? `Winner is ${winner}` : (Xturn) ? 'Next player is X': 'Next player is O';
    return (<>
    <div>
        {
            winner ? (<div className='winScreen'>
                <h1>WINNER IS</h1>
                <section className='winPlayer'>{winner}</section>
                <button onClick={reset} className='reset'>RESET</button>
            </div>) : (
        <div>
    <div className='status'>{status}<><button onClick={reset} className='reset'>RESET</button></></div>
    <div className="board">
        <div className='board-row'>{renderSquare(1-1)}{renderSquare(2-1)}{renderSquare(3-1)}</div>
        <div className='board-row'>{renderSquare(4-1)}{renderSquare(5-1)}{renderSquare(6-1)}</div>
        <div className='board-row'>{renderSquare(7-1)}{renderSquare(8-1)}{renderSquare(9-1)}</div>
    </div>
           </div> )}
    </div>
        
    </>);

    
}

export default Board;