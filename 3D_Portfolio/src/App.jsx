import { useState } from 'react'

import './App.css'

import Hero from './components/Hero'
import Aboutme from './components/Aboutme'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Hero />
      <Aboutme />
      <Project />
      <Contact />
    </>  
  )
}

export default App
