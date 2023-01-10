import { Box } from '@mui/system'
import { useState } from 'react'

import './App.css'
import { Calendario } from './Calendario/Calendario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Calendario/>
      

    </div>
  )
}

export default App
