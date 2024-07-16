import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const Message = ({ message, isUser }) => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleFeedback = (type) => {
    setFeedback(type);
  };

  return (
    <div 
      className={`message ${isUser ? 'user' : 'ai'}`} 
      onMouseEnter={() => setShowFeedback(true)}
      onMouseLeave={() => setShowFeedback(false)}
    >
      <p>{message}</p>
      {!isUser && showFeedback && (
        <div className="feedback">
          <ThumbUpIcon 
            color={feedback === 'like' ? 'primary' : 'inherit'} 
            onClick={() => handleFeedback('like')}
          />
          <ThumbDownIcon 
            color={feedback === 'dislike' ? 'primary' : 'inherit'} 
            onClick={() => handleFeedback('dislike')}
          />
        </div>
      )}
    </div>
  );
};

export default Message;
