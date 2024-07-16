import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Switch from '@mui/material/Switch';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="theme-toggle">
      <Switch checked={isDarkMode} onChange={toggleTheme} />
    </div>
  );
};

export default ThemeToggle;
