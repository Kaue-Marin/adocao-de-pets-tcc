import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">

     <Header/>
     <Outlet/>

    </div>

    </>
  )
}

export default App
