import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import auth from '../../api/auth';

export const useNowPlayingMovies = () => {
  const [message, setMessage] = useState('');

  const fetchNowPlayingMovies = async () => {
    try {
      const response = await auth.get('/movies/now-playing');
      return response.data.movies.slice(0, 6);
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
    queryKey: ['now-playing-movies'],
    queryFn: fetchNowPlayingMovies,
  });
  return { data, isLoading, isError, isSuccess, message };
};
