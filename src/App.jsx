import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import DashboardManager from './pages/DashboardManager'
import SetupChatbot from './pages/Setup-Chatbot'
import './Style.css'
import MainDashboard from './pages/MainDashboard'

const App = () => {

  return(
   <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardManager> <MainDashboard /> </DashboardManager>} />
      <Route path= "/setup-chatbot" element = { <DashboardManager> <SetupChatbot /> </DashboardManager> }/>
    </Routes> 
   </Router>
  );
}

export default App
