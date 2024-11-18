import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import auth from '../../api/auth';

export const useCreateUser = () => {
  const [message, setMessage] = useState('');

  const {
    mutate: createNewUser,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: (data) => auth.post('/user', data),
    onSuccess: (response) => {
      setMessage(`Status ${response.status}: ${response.statusText}`);
      return response;
    },
    onError: (error) => {
      error.response
        ? setMessage(
            `Status ${error.response.status}: ${error.response.data.message || error.response.statusText}`
          )
        : setMessage('Failed to load resource: net::ERR_FAILED');
      throw new Error(error);
    },
  });

  return { createNewUser, isError, isSuccess, message };
};
