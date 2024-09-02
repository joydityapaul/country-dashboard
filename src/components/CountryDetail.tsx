import { FC } from 'react';
import { Country } from '../types/Country';
import Image from 'next/image';

interface CountryDetailProps {
  country: Country;
}

const CountryDetail: FC<CountryDetailProps> = ({ country }) => {
  return (
    <div>
      <h1>{country.name.official}</h1>
      <Image src={country.flags.svg} alt={`Flag of ${country.name.official}`} width={512} height={256} />
      <p>Capital: {country.capital?.join(', ') || 'N/A'}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
      <p>Currencies: {Object.values(country.currencies || {}).map(curr => `${curr.name} (${curr.symbol})`).join(', ')}</p>
      <p>Languages: {Object.values(country.languages || {}).join(', ')}</p>
      <p>Timezones: {country.timezones.join(', ')}</p>
    </div>
  );
};

export default CountryDetail;
