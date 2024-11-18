import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import auth from '../../api/auth';

export const useGetMovieById = (id) => {
  const [message, setMessage] = useState('');

  const fetchGetMovieById = async () => {
    try {
      const response = await auth.get(`/movies/${id}`);
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
    queryKey: ['get-movie-by-id', id],
    queryFn: fetchGetMovieById,
    enabled: !!id,
  });
  return { data, isLoading, isError, isSuccess, message };
};
