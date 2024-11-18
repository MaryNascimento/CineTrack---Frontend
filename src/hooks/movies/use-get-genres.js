import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import auth from '../../api/auth';

export const useGetGenres = () => {
  const [message, setMessage] = useState('');

  const fetchGetGenres = async () => {
    try {
      const response = await auth.get('/movies/genres');
      return response.data.genres;
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
    queryKey: ['genres'],
    queryFn: fetchGetGenres,
  });
  return { data, isLoading, isError, isSuccess, message };
};
