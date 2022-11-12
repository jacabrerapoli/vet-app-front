import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Home } from './component/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home></Home>
    </div>
  )
}

export default App
