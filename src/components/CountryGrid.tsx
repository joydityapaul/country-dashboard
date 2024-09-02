import { FC } from 'react';
import { Country } from '../types/Country';
import CountryCard from './CountryCard';

interface CountryGridProps {
  countries: Country[];
}

const CountryGrid: FC<CountryGridProps> = ({ countries }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default CountryGrid;
