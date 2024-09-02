import { Country } from '../types/Country';

export const sortCountriesByPopulation = (countries: Country[], order: 'asc' | 'desc') => {
  return countries.sort((a, b) => 
    order === 'asc' ? a.population - b.population : b.population - a.population
  );
};
