import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import auth from '../../api/auth';

export const useMostPopularMovie = () => {
  const [message, setMessage] = useState('');

  const fetchMostPopularMovie = async () => {
    try {
      const response = await auth.get('/movies/popular');
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
    queryKey: ['most-popular-movie'],
    queryFn: fetchMostPopularMovie,
  });
  return { data, isLoading, isError, isSuccess, message };
};
