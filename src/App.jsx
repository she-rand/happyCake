import { useState } from 'react'

import './App.css'
import Navigation from './components/Navigation'
import { Route,Routes } from 'react-router-dom';
import HomePage from './views/HomePage'
import ContactPage from './views/ContactPage'
import NotFound from './views/NotFound';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contacts" element={<ContactPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
   
    </>
  )
}

export default App
