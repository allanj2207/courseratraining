import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Landing = () => {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">DataLens</div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#about">About</a>
            <Link to="/dashboard" className="btn btn-primary">Open Dashboard</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Turn data into decisions</h1>
            <p>
              Unlock the power of your business data with advanced analytics, real-time insights, and predictive modeling. Stop guessing and start growing.
            </p>
            <div className="hero-ctas">
              <Link to="/dashboard" className="btn btn-primary">Get Started</Link>
              <button className="btn btn-outline">View Demo</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="glass-mockup">
               <div className="mock-bar-chart">
                 <div className="bar" style={{height: '60%'}}></div>
                 <div className="bar" style={{height: '80%'}}></div>
                 <div className="bar" style={{height: '40%'}}></div>
                 <div className="bar" style={{height: '90%'}}></div>
                 <div className="bar" style={{height: '70%'}}></div>
               </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <h2>Everything you need to scale</h2>
          <div className="features-grid">
            <div className="card">
              <div className="feature-icon">📊</div>
              <h3>Real-Time Insights</h3>
              <p>Monitor your business performance as it happens. Our live dashboards keep you updated on every metric that matters.</p>
            </div>
            <div className="card">
              <div className="feature-icon">🧠</div>
              <h3>Predictive Analytics</h3>
              <p>Anticipate market trends and customer behavior with our AI-powered forecasting tools. Stay two steps ahead.</p>
            </div>
            <div className="card">
              <div className="feature-icon">📝</div>
              <h3>Custom Reports</h3>
              <p>Generate beautiful, deep-dive reports in seconds. Tailor every detail to your specific business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <div className="logo">DataLens</div>
            <p>Empowering businesses through data.</p>
          </div>
          <div className="footer-links">
            <div>
              <h4>Product</h4>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Security</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>&copy; 2024 DataLens Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
