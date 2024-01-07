import React from 'react'
import Main from './Components/Main/Main'
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Detail from "./Components/Detail/Detail"
// import Header from './Companents/Header/Header'
import Basket from './Components/Basket/Basket'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/basket' element={<Basket />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
