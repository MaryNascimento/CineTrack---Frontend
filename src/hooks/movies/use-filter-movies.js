import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import auth from '../../api/auth';

export const useFilterMovies = (params = {}) => {
  const [message, setMessage] = useState('');

  const fetchFilterMovies = async () => {
    try {
      const response = await auth.get('/movies', {
        params:
          params && Object.keys(params).length > 0 ? { ...params } : undefined,
      });
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
  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ['filter', params],
    queryFn: fetchFilterMovies,
  });
  return { data, isLoading, isError, isSuccess, message, refetch };
};
