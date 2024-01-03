import { useState } from "react"

export default function Button() {
  const [x, setX] = useState(0);
  const handleCLick = () => {
    setX(x + 1)
  };
  const handleReset = () => {
    setX(0)
  }
  return (
    <>
      <p>Clicked {x} times</p>
      <button
        onClick={handleCLick}>
        Click me !</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}