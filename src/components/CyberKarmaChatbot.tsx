import React, { useState } from 'react';
import './CyberkarmaGPTChatbot.css';

const CyberkarmaGPTChatbot: React.FC = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you with your cybersecurity needs today?' }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleUserMessage = (message: string) => {
    if (message.trim()) {
      setMessages([...messages, { sender: 'user', text: message }]);

      // Simulate bot response
      setTimeout(() => {
        const botResponse = getBotResponse(message);
        setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botResponse }]);
      }, 500);
    }
  };

  const getBotResponse = (message: string) => {
    if (message.toLowerCase().includes('cybersecurity posture')) {
      return 'Sure! Based on the latest assessments:\n\n* Threat Protection: 85% secure.\n* Access Control: 70% secure.\n* Data Protection: 90% secure.\n* Incident Response: 75% secure.\n\nWould you like detailed feedback on any specific area?';
    } else if (message.toLowerCase().includes('summary')) {
      return 'Of course! I have a comprehensive overview of your cybersecurity framework.\nWould you like a summary or details on a specific area?';
    } else {
      return 'I am not sure I understand. Can you please rephrase?';
    }
  };

  return (
    <div className="chat-window">
      <div className="message-container">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'bot' ? 'bot-message' : 'user-message'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
      <span
          className="plus-icon"
          onClick={() => {
            handleUserMessage(currentMessage);
            setCurrentMessage('');
          }}
        >
          +
        </span>
        <input
          type="text"
          value={currentMessage}
          placeholder="Type your message..."
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleUserMessage(currentMessage);
              setCurrentMessage('');
            }
          }}
          className="input"
        />
        <button
          onClick={() => {
            handleUserMessage(currentMessage);
            setCurrentMessage('');
          }}
          className="send-button"
        >
          Enter
        </button>
        
      </div>
    </div>
  );
};

export default CyberkarmaGPTChatbot;
