import './App.css'
import Home from './pages/Home'
import NewTask from './pages/NewTask'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/routing/privateRoute'



function App() {
  return <div className='bg-gray-100 font-sans w-full h-screen overflow-hidden'>
    
    <Routes>
      <Route path='/' exact element={<PrivateRoute><Home /> </PrivateRoute>} />
      <Route path='/new-task' exact element={<PrivateRoute><NewTask /></PrivateRoute>} />
      <Route path='/login' exact element={<Login />}/>
      <Route path='/signup' exact element={<Signup />}/>
    </Routes>
  </div>
}

export default App
