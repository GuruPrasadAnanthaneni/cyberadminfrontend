import React, { useState } from "react";
import "./Home.css";
import logo_icon from "../../assets/logo.png";

function Home() {
  const [view, setView] = useState("active"); // Tracks the current view

  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="title" style={{ cursor: "pointer" }}>
          <img src={logo_icon} alt="Logo" className="logo" />
          <h1>Billy - Admin Portal</h1>
        </div>
      </header>

      {/* Navigation */}
      <nav className="navbar">
        <button
          className={`nav-button ${view === "active" ? "active" : ""}`}
          onClick={() => setView("active")}
        >
          Active Reports
        </button>
        <button
          className={`nav-button ${view === "history" ? "active" : ""}`}
          onClick={() => setView("history")}
        >
          Reports History
        </button>
      </nav>

      {/* Main Content */}
      <main className="content">
        {view === "active" ? (
          <p className="no-records-message">No records to display.</p>
        ) : (
          <p className="no-records-message">No history to display.</p>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Billy - Buddy against Cyber Bullying. All rights reserved.</p>
        <p>
          Contact us: <a href="mailto:support@billy.com">support@billy.com</a> |
          Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
        </p>

        <div className="social-media">
          <a
            href="https://www.facebook.com/billy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>{" "}
          |
          <a
            href="https://www.twitter.com/billy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{" "}
          |
          <a
            href="https://www.instagram.com/billy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>{" "}
          |
          <a
            href="https://www.linkedin.com/company/billy"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
