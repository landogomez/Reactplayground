import { useState } from "react"

const TURNS = {
  X: 'X',
  O: 'O'
}


const Square = ({ children, updateBoard, isSelected,index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  
  return (
    <div className={className}>
      {children}
    </div>
  )
}

function App() {

  const [board, setBoard] = useState(Array(9).fill(null)) // Se crea un array de 9 elementos con valor null

  const [turn, setTurn] = useState(TURNS.X) // Se crea un estado para el turno
 return (
  <>
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {
          board.map((_, index) => { // map recibe dos argumentos, el primero es el valor del array y el segundo es el indice
            return (
              <Square
                key={index}
                index={index}
                >
                  {board[index]} {/* Se le pasa el valor del array */}
                </Square>

            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected = {turn === TURNS.X}>
          {TURNS.X}
        </Square> 
        <Square isSelected = {turn === TURNS.O}>
          {TURNS.O}
         </Square> 
      </section>
    </main>
  </>
 )
}

export default App
