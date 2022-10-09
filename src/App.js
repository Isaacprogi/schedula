import './App.css'
import {useState} from 'react'
import About from './components/About'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Works from './components/Works'
import Skills from './components/Skills'
import Home from './components/Home'
import {Routes,Route} from 'react-router-dom'


function App() {
  const[nav,setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className="font-sans flex flex-col bg-gray-800 w-full h-screen overflow-hidden">
       <NavBar handleClick={handleClick} nav={nav}/> 
     <Routes  > 
       <Route path='/' exact element={<Home setNav={setNav}/>}/> 
        <Route path='/about-me'  element={<About setNav={setNav} />}/>
        <Route path='/skills' element={<Skills setNav={setNav}/>}/>
        <Route path='/works' element={<Works setNav={setNav}/>}/>
        <Route path='/contact' element={<Contact setNav={setNav}/>}/>
         <Route/> 
      </Routes> 
    </div>
  )
}

export default App

