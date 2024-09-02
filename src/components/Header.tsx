import { FC } from 'react';
import DarkModeToggle from './DarkModeToggle';
import SearchBar from './SearchBar';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header className="flex justify-between items-center p-4">
      <SearchBar onSearch={onSearch} />
      <DarkModeToggle />
    </header>
  );
};

export default Header;
