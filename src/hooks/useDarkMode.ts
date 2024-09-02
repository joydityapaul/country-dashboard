import { useState, useEffect } from 'react';

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedPreference = localStorage.getItem('dark-mode');
    return savedPreference ? JSON.parse(savedPreference) : false;
  });

  useEffect(() => {
    localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return { isDarkMode, toggleDarkMode: () => setIsDarkMode(!isDarkMode) };
};
