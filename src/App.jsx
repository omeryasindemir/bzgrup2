import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>
    </React.Fragment>
  )
}

export default App