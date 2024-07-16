import React, { useState } from 'react';

const FeedbackOverview = ({ feedbacks }) => {
  const [filter, setFilter] = useState(0);

  const handleFilterChange = (event) => {
    setFilter(parseInt(event.target.value, 10));
  };

  const filteredFeedbacks = filter > 0 ? feedbacks.filter(fb => fb.rating === filter) : feedbacks;

  return (
    <div className="feedback-overview">
      <h2>Feedback Overview</h2>
      <select value={filter} onChange={handleFilterChange}>
        <option value={0}>All Ratings</option>
        {[1, 2, 3, 4, 5].map(rating => (
          <option key={rating} value={rating}>{rating} Stars</option>
        ))}
      </select>
      <table>
        <thead>
          <tr>
            <th>Conversation</th>
            <th>Rating</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {filteredFeedbacks.map((fb, index) => (
            <tr key={index}>
              <td>{fb.conversationIndex + 1}</td>
              <td>{fb.rating}</td>
              <td>{fb.feedback}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackOverview;
