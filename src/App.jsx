import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import DashboardManager from './pages/DashboardManager'
import './Style.css'
import MainDashboard from './pages/MainDashboard'
import CompanyRegistration from './pages/CompanyRegistration'
import CompanyDashboard from './pages/CompanyDashboard'
import ChatbotIntegration from './pages/ChatBotIntregation'

const App = () => {

  return(
   <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardManager> <MainDashboard /> </DashboardManager>} />
      <Route path='/company-registration' element={<DashboardManager> <CompanyRegistration /> </DashboardManager>} />
      <Route path= "/company-dashboard" element = { <DashboardManager> <CompanyDashboard /> </DashboardManager> }/>
      <Route path="/setup-chatbot-intregation" element={<DashboardManager> <ChatbotIntegration /> </DashboardManager>} />
    </Routes> 
   </Router>
  );
}

export default App
