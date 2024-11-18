import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import auth from '../../api/auth';

export const useSearchMovies = (query) => {
  const [message, setMessage] = useState('');

  const fetchSearchMovies = async () => {
    try {
      const response = await auth.get('/movies/search', {
        params: {
          query,
        },
      });
      return response.data;
    } catch (error) {
      error.response
        ? setMessage(
            `Status ${error.response.status}: ${error.response.data.message || error.response.statusText}`
          )
        : setMessage('Failed to load resource: net::ERR_FAILED');
      throw new Error(error);
    }
  };
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['genres', query],
    queryFn: fetchSearchMovies,
    enabled: !!query,
  });
  return { data, isLoading, isError, isSuccess, message };
};