import { GetServerSideProps } from 'next';
import { Country } from '../types/Country';
import { fetchCountries } from '../utils/api';
import CountryDetail from '../components/CountryDetail';

interface CountryPageProps {
  country: Country;
}

const CountryPage: React.FC<CountryPageProps> = ({ country }) => {
  return <CountryDetail country={country} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { country } = context.query;
  const countries = await fetchCountries();
  const selectedCountry = countries.find((c) => c.name.common === country);

  if (!selectedCountry) {
    return { notFound: true };
  }

  return { props: { country: selectedCountry } };
};

export default CountryPage;
