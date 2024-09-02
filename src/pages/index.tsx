import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { Country } from '../types/Country';
import { fetchCountries } from '../utils/api';
import { filterCountriesByRegion, searchCountries } from '../utils/filterCountries';
import { sortCountriesByPopulation } from '../utils/sortCountries';
import CountryGrid from '../components/CountryGrid';
import Header from '../components/Header';

interface HomePageProps {
  initialCountries: Country[];
}

const HomePage: React.FC<HomePageProps> = ({ initialCountries }) => {
  const [countries, setCountries] = useState(initialCountries);

  const handleSearch = (query: string) => {
    const filteredCountries = searchCountries(initialCountries, query);
    setCountries(filteredCountries);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <CountryGrid countries={countries} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const initialCountries = await fetchCountries();
  return { props: { initialCountries } };
};

export default HomePage;
