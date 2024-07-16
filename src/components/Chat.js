import React, { useState } from 'react';
import Message from './Message';
import aiResponses from '../data/aiResponses.json';

const Chat = ({ onEndConversation }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage = { text: input, isUser: true };
      const aiResponse = aiResponses.find(resp => resp.question.toLowerCase() === input.toLowerCase());

      setMessages([...messages, userMessage]);
      if (aiResponse) {
        setMessages(prev => [...prev, userMessage, { text: aiResponse.response, isUser: false }]);
      }

      setInput('');
    }
  };

  const handleEndConversation = () => {
    onEndConversation(messages);
  };

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} message={msg.text} isUser={msg.isUser} />
        ))}
      </div>
      <div className="input">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          onKeyPress={(e) => e.key === 'Enter' ? handleSendMessage() : null}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      <button onClick={handleEndConversation}>End Conversation</button>
    </div>
  );
};

export default Chat;
