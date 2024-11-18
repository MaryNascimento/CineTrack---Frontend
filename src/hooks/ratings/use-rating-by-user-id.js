import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import auth from '../../api/auth';

export const useGetRatingByUser = () => {
  const [message, setMessage] = useState('');

  const fetchGetRatingByUser = async () => {
    try {
      const response = await auth.get(`/rating/user`);
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
    queryKey: ['get-rating-by-user'],
    queryFn: fetchGetRatingByUser,
  });
  return { data, isLoading, isError, isSuccess, message };
};
