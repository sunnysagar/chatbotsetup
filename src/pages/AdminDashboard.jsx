import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { Settings, MessageCircle, Users, Activity } from "lucide-react";
import "../Style.css";

const data = [
  { name: "Mon", conversations: 120 },
  { name: "Tue", conversations: 150 },
  { name: "Wed", conversations: 180 },
  { name: "Thu", conversations: 140 },
  { name: "Fri", conversations: 200 },
  { name: "Sat", conversations: 110 },
  { name: "Sun", conversations: 90 },
];

const recentConversations = [
  { id: 1, user: "Sunny", message: "How can I reset my password?", time: "5 min ago" },
  { id: 2, user: "Sagar", message: "What are your business hours?", time: "15 min ago" },
  { id: 3, user: "Aarav", message: "I need help with my order.", time: "30 min ago" },
];

export default function ChatbotAdminDashboard() {
  return (
    <div className="chatbot-dashboard-container">
      <h1 className="dashboard-title">Chatbot Admin Dashboard</h1>
      <div className="dashboard-grid">
        <div className="dashboard-card stats-card">
          <h2>Statistics</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <Users className="stat-icon" />
              <span className="stat-value">1,234</span>
              <span className="stat-label">Total Users</span>
            </div>
            <div className="stat-item">
              <MessageCircle className="stat-icon" />
              <span className="stat-value">5,678</span>
              <span className="stat-label">Total Conversations</span>
            </div>
            <div className="stat-item">
              <Activity className="stat-icon" />
              <span className="stat-value">98%</span>
              <span className="stat-label">Satisfaction Rate</span>
            </div>
          </div>
        </div>
        <div className="dashboard-card chart-card">
          <h2>Conversations per Day</h2>
          <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="conversations" fill="#8884d8" />
          </BarChart>
        </div>
        <div className="dashboard-card conversations-card">
          <h2>Recent Conversations</h2>
          <ul className="conversation-list">
            {recentConversations.map((conv) => (
              <li key={conv.id} className="conversation-item">
                <strong>{conv.user}</strong>
                <p>{conv.message}</p>
                <span>{conv.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="dashboard-card settings-card">
          <h2>Quick Settings</h2>
          <div className="settings-grid">
            <button className="settings-button">
              <Settings className="settings-icon" />
              General Settings
            </button>
            <button className="settings-button">
              <MessageCircle className="settings-icon" />
              Chatbot Responses
            </button>
            <button className="settings-button">
              <Users className="settings-icon" />
              User Management
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}