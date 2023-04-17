import { useState } from 'react'
import { Outlet } from 'react-router-dom'

function App () {

  return (
    <div className="App">
      App
      <Outlet></Outlet>
    </div>
  )
}

export default App
