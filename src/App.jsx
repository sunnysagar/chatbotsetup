import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import DashboardManager from './pages/DashboardManager'
import './Style.css'
import MainDashboard from './pages/MainDashboard'
import CompanyRegistration from './pages/CompanyRegistration'
import CompanyDashboard from './pages/CompanyDashboard'
import ChatbotIntegration from './pages/ChatBotIntregation'
import '@fortawesome/fontawesome-free/css/all.min.css';
import EchoAssistant from './pages/EchoTesting'
import ChatbotAdminDashboard from './pages/AdminDashboard'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/Setting'


const App = () => {

  return(
   <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardManager> <MainDashboard /> </DashboardManager>} />
      <Route path='/company-registration' element={<DashboardManager> <CompanyRegistration /> </DashboardManager>} />
      <Route path= "/company-dashboard" element = { <DashboardManager> <CompanyDashboard /> </DashboardManager> }/>
      <Route path="/setup-chatbot-intregation" element={<DashboardManager> <EchoAssistant /> </DashboardManager>} />
      <Route path ="/admin-dashboard" element={ <DashboardManager> <ChatbotAdminDashboard /> </DashboardManager> } />
      <Route path="/user-profile" element={<DashboardManager> <ProfilePage /> </DashboardManager>} />
      <Route path='/settings' element={<DashboardManager><SettingsPage /></DashboardManager>} />
    </Routes> 
   </Router>
  );
}

export default App
