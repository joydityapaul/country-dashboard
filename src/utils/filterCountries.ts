import { Country } from '../types/Country';

export const filterCountriesByRegion = (countries: Country[], region: string) => {
  return countries.filter(country => country.region === region);
};

export const searchCountries = (countries: Country[], query: string) => {
  return countries.filter(country => 
    country.name.common.toLowerCase().includes(query.toLowerCase()) ||
    (country.capital && country.capital.some(cap => cap.toLowerCase().includes(query.toLowerCase())))
  );
};
