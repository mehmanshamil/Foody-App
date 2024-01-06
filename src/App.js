import React from 'react'
import Main from './Companents/Main/Main'
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Detail from "./Companents/Detail/Detail"
// import Header from './Companents/Header/Header'
import Basket from './Companents/Basket/Basket'
import Header from './Companents/Header/Header.jsx'
import Footer from './Companents/Footer/Footer.jsx'

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
