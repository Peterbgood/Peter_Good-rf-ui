import React from 'react';
import '../styles/main.scss';

export default function Home() {
  return (
    <div className="dashboard-container">
      <div className="utility-rail">
        <div className="top-icons">
          <div className="mini-rf-logo">
            <img src="/rf-logo.png" alt="RainFocus Logo" />
          </div>
          <div className="utility-icon active-icon">
            <img src="/summit-hero.png" alt="Summit Icon" />
          </div>
        </div>
        
        <div className="user-avatar-fixed">
          <span className="avatar-text">FL</span>
        </div>
      </div>

      <aside className="nav-panel">
        <div className="sidebar-header">
          <h3>RainFocus Summit</h3>
          <p>Lehi, UT • December 15th</p>
        </div>
        
        <div className="search-box">
          <input type="text" placeholder="Search" />
        </div>

        <nav className="nav-menu">
          <div className="nav-item">
            <span className="circle-dot"></span> Guide
          </div>
          
          <div className="nav-item-group">
            <div className="nav-item active">
              <span className="circle-dot active"></span> Attendees
            </div>
            <ul className="sub-menu">
              <li className="sub-active">Attendees</li>
              <li>Attendee types</li>
              <li>Packages</li>
              <li>Reg codes</li>
              <li>Discounts</li>
            </ul>
          </div>
          
          <div className="nav-item">
            <span className="circle-dot"></span> Content
          </div>
          <div className="nav-item">
            <span className="circle-dot"></span> Exhibitors
          </div>
        </nav>
      </aside>

      <main className="main-content">
        <header className="content-header">
          <div className="header-title-block">
            <div className="summit-avatar">
              <img src="/summit-hero.png" alt="RainFocus Summit" />
            </div>
            <div>
              <h1>RainFocus Summit</h1>
              <p>December 15th <br /> Lehi, Utah</p>
            </div>
          </div>
          <button className="btn-edit">Edit event</button>
        </header>

        <section className="setup-guide">
          <h2>Event setup guide</h2>
          <p className="guide-subtitle">See the available list of modules below. We suggest that you start with the attendee module.</p>
          <hr className="divider" />
        </section>

        <section className="module-section">
          <div className="module-header">
            <img src="/attendee-icon.png" alt="Attendee Module Icon" className="module-title-icon" />
            <h2>Attendee</h2>
          </div>

          <div className="step-container">
            <h3><strong>Step 1:</strong> Base settings.</h3>
            <div className="full-width-card">
              <div className="col">
                <h4>General</h4>
                <p>Define Attendee types & attributes</p>
              </div>
              <div className="col">
                <h4>Title</h4>
                <p>Description that explains the value goes here. Description that explains the value goes here.</p>
              </div>
              <div className="col">
                <h4>Title</h4>
                <p>Description that explains the value goes here. Description that explains the value goes here.</p>
              </div>
            </div>
          </div>

          <div className="step-container">
            <h3><strong>Step 2:</strong> Build registration workflows.</h3>
            <div className="grid-cards-three-col">
              {[1, 2, 3].map((i) => (
                <div key={i} className="workflow-card">
                  <h4>
                    <span className="card-icon">↳</span> Attendee Registration
                  </h4>
                  <p>Start by creating a general registration workflow</p>
                </div>
              ))}
              <div className="workflow-card add-card">
                <span className="plus-icon">🞦</span>
                <p>Add Registration Workflow</p>
              </div>
            </div>
          </div>

          <div className="step-container">
            <h3><strong>Step 3:</strong> Design post-registration experiences.</h3>
            <div className="grid-cards-three-col">
              <div className="workflow-card">
                <h4>
                  <span className="card-icon-portal">💻</span> Attendee Portal
                </h4>
                <p>Manage the portal that attendees will see after they've registered for your event.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}