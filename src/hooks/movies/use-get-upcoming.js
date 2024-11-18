import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import auth from '../../api/auth';

export const useGetUpcomingMovies = () => {
  const [message, setMessage] = useState('');

  const fetchGetUpcomingMovies = async () => {
    try {
      const response = await auth.get('/movies/upcoming');
      return response.data.movies;
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
    queryKey: ['upcoming-movies'],
    queryFn: fetchGetUpcomingMovies,
  });
  return { data, isLoading, isError, isSuccess, message };
};
