import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import auth from '../../api/auth';

export const useUserById = (id) => {
  const [message, setMessage] = useState('');

  const fetchUserById = async () => {
    try {
      const response = await auth.get(`/user/${id}`);
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
    queryKey: ['user-id', id],
    queryFn: fetchUserById,
    enabled: !!id,
  });
  return { data, isLoading, isError, isSuccess, message };
};
