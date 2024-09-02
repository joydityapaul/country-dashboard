import { useEffect, useState } from 'react';
import { fetchCountries } from '../utils/api';
import { Country } from '../types/Country';

export const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
      } catch (err) {
        setError('Error fetching countries');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  return { countries, loading, error };
};
