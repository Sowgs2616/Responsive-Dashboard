// KnowledgeAssessment.js
import React, { useState } from 'react';
import './KnowledgeAssessment.css';

const KnowledgeAssessment = () => {
  const [isContentVisible, setContentVisible] = useState(false);

  const handleToggleVisibility = () => {
    setContentVisible(!isContentVisible);
  };

  return (
    <div className="app">
      <div className="header">
        <div className="header-top">
        <button className="dropdown" onClick={handleToggleVisibility}>
            Knowledge Assessment Results
            <span className={`arrow-circle ${isContentVisible ? 'rotate' : ''}`}>
              <span className="arrow">▼</span>
            </span>
          </button>
          {isContentVisible && (
            <div className="progress-indicators">
              <div className="indicator correct">65% Correct</div>
              <div className="indicator incorrect">20% Incorrect</div>
              <div className="indicator dont-know">15% Don’t Know</div>
            </div>
          )}
        </div>
        </div>
        {isContentVisible && (
          <div className="filter-buttons">
            <div><button className="filter-button1">All Questions</button></div>
            <div><button className="filter-button2">Vulnerability</button></div>
            <div><button className="filter-button3">SOC</button></div>
            <div><button className="filter-button4">Hardening</button></div>
          </div>
        )}
      {isContentVisible && (
      <div className="main">
        <Section title="Human Layer" />
        <Section title="Perimeter Security" />
        <Section title="Network Security" />
        <Section title="Endpoint Security" />
        <Section title="Application Security" />
      </div>
      )}
    </div>
  );
};

const Section = ({ title }) => (
  <div className="section">
    <div className="section-title">{title}</div>
    <div className="buttons">
      <button className="status-button vulnerability">Vulnerability</button>
      <button className="status-button soc">SOC</button>
      <button className="status-button hardening">Hardening</button>
      <button className="navigate">→</button>
    </div>
    
  </div>
);

export default KnowledgeAssessment;