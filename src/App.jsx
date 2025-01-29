import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import './Style.css'

const App = () => {

  return(
   <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes> 
   </Router>
  );
}

export default App
