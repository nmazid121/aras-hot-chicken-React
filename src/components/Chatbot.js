import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';

import config from '../chatbot/config';
import MessageParser from '../chatbot/MessageParser';
import ActionProvider from '../chatbot/ActionProvider';

import './Chatbot.css';

const ChatbotComponent = () => {
  const [showBot, setShowBot] = useState(false);

  const toggleBot = () => {
    setShowBot(!showBot);
  };

  return (
    <div className="chatbot-container">
      {showBot && (
        <div className="chatbot-box">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
      <button className="chatbot-toggle" onClick={toggleBot}>
        {showBot ? '✕' : '💬'}
      </button>
    </div>
  );
};

export default ChatbotComponent; 