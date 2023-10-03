import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Form01 } from './Pages/Form01'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Form01 />
      </div>
    </>
  )
}

export default App
