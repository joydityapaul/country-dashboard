import { FC } from 'react';
import { Country } from '../types/Country';
import Link from 'next/link';
import Image from 'next/image';

interface CountryCardProps {
  country: Country;
}

const CountryCard: FC<CountryCardProps> = ({ country }) => {
  return (
    <Link href={`/${country.name.common}`}>
      <a className="border rounded shadow-lg hover:shadow-xl p-4">
        <Image src={country.flags.svg} alt={`Flag of ${country.name.common}`} width={256} height={128} />
        <h2 className="font-bold text-lg">{country.name.common}</h2>
        <p>Capital: {country.capital?.[0] || 'N/A'}</p>
        <p>Population: {country.population.toLocaleString()}</p>
        <p>Region: {country.region}</p>
      </a>
    </Link>
  );
};

export default CountryCard;
