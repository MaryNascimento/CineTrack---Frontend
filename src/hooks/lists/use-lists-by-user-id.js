import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import auth from '../../api/auth';

export const useGetListsByUser = () => {
  const [message, setMessage] = useState('');

  const fetchGetListsByUser = async () => {
    try {
      const response = await auth.get(`/list`);
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
  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ['get-lists-by-user'],
    queryFn: fetchGetListsByUser,
  });
  return { data, isLoading, isError, isSuccess, message, refetch };
};
