import React, { useState } from 'react'
import Sqaure from './Square'

const Board = () => {
    const [xIsNext, setXIsNext] = useState(true)
    const [square, setSquare] = useState(Array(9).fill(null))

    const handleClick = (i) => {
        if (square[i] || calculateWinner(square)) {
            return
        }
        const nextSquares = square.slice()
        if (xIsNext) {
            nextSquares[i] = 'X'
        } else {
            nextSquares[i] = '0'
        }
        setSquare(nextSquares)
        setXIsNext(!xIsNext)
    }

    const calculateWinner = (square) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]
            if (square[a] && square[a] === square[b] && square[a] === square[c]) {
                return square[a]
            }
        }
        return null
    }

    const winner = calculateWinner(square)
    let status
    if (winner) {
        status = "Winner : " + winner
    } else {
        status = "Next Player : " + (xIsNext ? "X" : "0")
    }

    return (
        <div>
            <div className='status'><h1>{status}</h1></div>
            <div className='board-row'>
                <Sqaure value={square[0]} onSquareClick={() => handleClick(0)} />
                <Sqaure value={square[1]} onSquareClick={() => handleClick(1)} />
                <Sqaure value={square[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className='board-row'>
                <Sqaure value={square[3]} onSquareClick={() => handleClick(3)} />
                <Sqaure value={square[4]} onSquareClick={() => handleClick(4)} />
                <Sqaure value={square[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className='board-row'>
                <Sqaure value={square[6]} onSquareClick={() => handleClick(6)} />
                <Sqaure value={square[7]} onSquareClick={() => handleClick(7)} />
                <Sqaure value={square[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </div>
    )
}

export default Board
