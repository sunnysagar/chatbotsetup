import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import MainDashboard from './pages/MainDashboard'
import SetupChatbot from './pages/Setup-Chatbot'
import './Style.css'

const App = () => {

  return(
   <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<MainDashboard />} />
      <Route path= "/setup-chatbot" element = { <SetupChatbot /> }/>
    </Routes> 
   </Router>
  );
}

export default App
