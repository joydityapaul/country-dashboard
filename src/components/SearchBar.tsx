import { FC, useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by country name or capital"
        className="p-2 border rounded-l"
      />
      <button onClick={handleSearch} className="p-2 bg-blue-500 text-white rounded-r">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
