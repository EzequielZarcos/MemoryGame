import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0)

  const incrementar = ( number: number = 1 ):void => {
    setCounter(counter + number)
  }

  return (
      <div className="mt-5">
        <h1>Counter</h1>
        <span>Valor: {counter}</span>
        <br />
        <button onClick={() => incrementar()} className="btn btn-outline-primary m-2">
          +1
        </button>
        <button onClick={() => incrementar(2)} className="btn btn-outline-primary m-2">
          +2
        </button>
        <button onClick={() => setCounter(0)} className="btn btn-outline-danger m-2">
          Reset
        </button>
      </div>
    )
}  