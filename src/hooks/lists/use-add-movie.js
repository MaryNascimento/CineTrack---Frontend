import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import auth from '../../api/auth';

export const useAddList = () => {
  const [message, setMessage] = useState('');

  const {
    mutate: addNewMovie,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: (data) => auth.post(`/list/add`, data),
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

  return { addNewMovie, isError, isSuccess, message };
};
