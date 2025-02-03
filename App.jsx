import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Hero from './pages/Hero'
import Contact from './pages/Contact'
import "./App.css"

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path = "/"  element = {<Hero/>} /> 
    <Route path = "/About"  element = {<About/>} />
    <Route path = "/Projects"  element = {<Projects/>} />
    <Route path = "/Contact"  element = {<Contact/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App