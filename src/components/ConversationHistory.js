import React from 'react';

const ConversationHistory = ({ conversations, onSelectConversation }) => {
  return (
    <div className="conversation-history">
      <h2>Conversation History</h2>
      <ul>
        {conversations.map((conv, index) => (
          <li key={index} onClick={() => onSelectConversation(index)}>
            Conversation {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationHistory;
