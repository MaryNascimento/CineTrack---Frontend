import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import auth from '../../api/auth';

export const useAuthUser = () => {
  const [message, setMessage] = useState('');

  const { mutate: authUser, isError } = useMutation({
    mutationFn: (data) => auth.post('/auth/login', data),
    onSuccess: (response) => {
      setMessage('');
      sessionStorage.setItem('token', response.data.token);
      window.location.href = '/';
    },
    onError: (error) => {
      setMessage(`${error.response.data.message}`);
      error.response
        ? setMessage(
            `${error.response.data.message || error.response.statusText}`
          )
        : setMessage('Failed to load resource: net::ERR_FAILED');
      throw new Error(error);
    },
  });

  return { authUser, isError, message };
};
