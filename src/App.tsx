import React, { useState } from 'react';
import KnowledgeAssessment from './components/KnowledgeAssessment';
import SummaryCharts from './components/SummaryCharts';
import CyberkarmaGPTChatbot from './components/CyberKarmaChatbot';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App: React.FC = () => {
    const [showCharts, setShowCharts] = useState(true);
    const [showChatbot, setShowChatbot] = useState(false);
    const [buttonActive, setButtonActive] = useState<'summary' | 'cyberkarmaGPT'>('summary');

    const handleSummaryClick = () => {
        setShowCharts(true);
        setShowChatbot(false);
        setButtonActive('summary');
    };

    const handleCyberkarmaGPTClick = () => {
        setShowChatbot(true);
        setShowCharts(false);
        setButtonActive('cyberkarmaGPT');
    };

    return (
        <div className="app">
            <KnowledgeAssessment />

            <div className="button">
                <div className="button-container">
                    <button
                        onClick={handleSummaryClick}
                        className={`button-item ${buttonActive === 'summary' ? 'active' : ''}`}
                    >
                        Summary
                    </button>
                    <button
                        onClick={handleCyberkarmaGPTClick}
                        className={`karmagpt-btn ${buttonActive === 'cyberkarmaGPT' ? 'active' : ''}`}
                    >
                        <span className="icon">🚀</span> cyberkarmaGPT
                    </button>
                </div>

                <div className="content-container">
                    {showCharts && <SummaryCharts />}
                    {showChatbot && <CyberkarmaGPTChatbot />}
                </div>
            </div>
        </div>
    );
};

export default App;










