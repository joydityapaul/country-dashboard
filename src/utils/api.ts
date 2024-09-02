import axios from 'axios';
import { Country } from '../types/Country';

export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const response = await axios.get<Country[]>('https://restcountries.com/v3.1/all');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch countries');
  }
};
