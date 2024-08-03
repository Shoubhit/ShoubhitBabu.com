import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Section from './components/Section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <h1>Shoubhit Babu</h1>
      <p> Computer science genius </p>
      <p>IQ:9000, jacked, more bitches than yo bands</p>
     </div>
     <br></br>
     <h1>Experiences</h1>
     <div className='Experience'>
     <Section title='IT job' info='Helps idiots who cannnot use google'/>
     <Section title='Research Intern' info='Aided in collection data'/>
     </div>

    </>
  )
}

export default App
