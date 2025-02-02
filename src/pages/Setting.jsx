import React from "react";
import { Bell, User, Lock, Sun, Moon, Mail } from "lucide-react";
import "../Style.css";

const SettingsPage = () => {
  return (
    <div className="settings-container">
      <div className="settings-card">
        <header className="settings-header">
          <h1>Settings</h1>
        </header>
        <nav className="settings-nav">
          <ul className="settings-nav-list">
            <li>
              <a href="#profile" className="settings-nav-item">
                Profile
              </a>
            </li>
            <li>
              <a href="#notifications" className="settings-nav-item">
                Notifications
              </a>
            </li>
            <li>
              <a href="#privacy" className="settings-nav-item">
                Privacy
              </a>
            </li>
          </ul>
        </nav>
        <main className="settings-main">
          <section id="profile" className="settings-section">
            <h2>Profile Settings</h2>
            <div className="settings-input-group">
              <User className="settings-icon" />
              <input
                type="text"
                placeholder="Your Name"
                className="settings-input"
              />
            </div>
            <div className="settings-input-group">
                <Mail className="settings-icon" />
              <input
                type="email"
                placeholder="Your Email"
                className="settings-input"
              />
            </div>
          </section>
          <section id="notifications" className="settings-section">
            <h2>Notification Preferences</h2>
            <div className="settings-input-group">
              <Bell className="settings-icon" />
              <label className="settings-checkbox">
                <div className="checkbox-container">
                  <input type="checkbox" className="checkbox-input" />
                  <div className="checkbox-bg"></div>
                  <div className="checkbox-dot"></div>
                </div>
                <div className="settings-label">Enable Push Notifications</div>
              </label>
            </div>
          </section>
          <section id="privacy" className="settings-section">
            <h2>Privacy Settings</h2>
            <div className="settings-input-group">
              <Lock className="settings-icon" />
              <label className="settings-checkbox">
                <div className="checkbox-container">
                  <input type="checkbox" className="checkbox-input" />
                  <div className="checkbox-bg"></div>
                  <div className="checkbox-dot"></div>
                </div>
                <div className="settings-label">Make Profile Private</div>
              </label>
            </div>
          </section>
          <section id="theme" className="settings-section">
            <h2>Theme Settings</h2>
            <div className="settings-theme-toggle">
              <Sun className="settings-icon" />
              <Moon className="settings-icon" />
              <input type="range" className="settings-range-input" />
            </div>
          </section>
        </main>
        <footer className="settings-footer">© 2025 Beyond Chats</footer>
      </div>
    </div>
  );
};

export default SettingsPage;
