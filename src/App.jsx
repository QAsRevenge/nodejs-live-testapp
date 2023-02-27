import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          <img src="/Aybabtu.png" alt="" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          xaxaxaxaxaxa
        </p>
      </div>
    </div>
  )
}

export default App
