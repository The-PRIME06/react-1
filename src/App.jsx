import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Footer from "./components/footer"
import Section from './components/section'
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
    <Header/>
    <Section/>
    <Footer/>
    </div>
  )
}

export default App
