import { FC } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const DarkModeToggle: FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button onClick={toggleDarkMode} className="p-2 bg-gray-200 dark:bg-gray-800 rounded">
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
