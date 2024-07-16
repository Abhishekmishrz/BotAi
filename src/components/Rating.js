import React from 'react';
import Rating from '@mui/material/Rating';

const RatingComponent = ({ value, onChange }) => {
  return (
    <div>
      <Rating
        name="conversation-rating"
        value={value}
        onChange={(event, newValue) => {
          onChange(newValue);
        }}
      />
    </div>
  );
};

export default RatingComponent;
