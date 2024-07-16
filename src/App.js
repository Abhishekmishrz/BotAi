import React, { useState } from 'react';
import Chat from './components/Chat';
import ConversationHistory from './components/ConversationHistory';
import FeedbackOverview from './components/FeedbackOverview';
import ThemeToggle from './components/ThemeToggle';
import RatingComponent from './components/Rating';
import ThemeProvider from './context/ThemeContext';

import './App.css';

function App() {
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [feedbacks, setFeedbacks] = useState([]);
  const [rating, setRating] = useState(0);
  const [subjectiveFeedback, setSubjectiveFeedback] = useState('');

  const handleEndConversation = (messages) => {
    setConversations([...conversations, { messages }]);
    setCurrentConversation(null);
  };

  const handleSelectConversation = (index) => {
    setCurrentConversation(conversations[index]);
  };

  const handleSubmitFeedback = () => {
    setFeedbacks([...feedbacks, {
      conversationIndex: conversations.length - 1,
      rating,
      feedback: subjectiveFeedback
    }]);
    setRating(0);
    setSubjectiveFeedback('');
  };

  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggle />
        {currentConversation ? (
          <Chat onEndConversation={handleEndConversation} />
        ) : (
          <div>
            <ConversationHistory 
              conversations={conversations} 
              onSelectConversation={handleSelectConversation} 
            />
            <FeedbackOverview feedbacks={feedbacks} />
            <RatingComponent value={rating} onChange={setRating} />
            <textarea 
              value={subjectiveFeedback} 
              onChange={(e) => setSubjectiveFeedback(e.target.value)} 
              placeholder="Enter your feedback"
            />
            <button onClick={handleSubmitFeedback}>Submit Feedback</button>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
