import { useParams } from 'react-router-dom';
import { useGetMovieById } from '../hooks/movies/use-movie-by-id';
import { useState } from 'react';
import { useNewRating } from '../hooks/ratings/use-new-rating';
import { useGetRatingByMovie } from '../hooks/ratings/use-ratings-by-movie';
import { FaStar } from 'react-icons/fa';
import * as Popover from '@radix-ui/react-popover';
import * as Toast from '@radix-ui/react-toast';
import { useAddList } from '../hooks/lists/use-add-movie';
import { useGetListsByUser } from '../hooks/lists/use-lists-by-user-id';

export const Movie = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [message, setMessage] = useState('');
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const { id } = useParams();
  const { data, isLoading } = useGetMovieById(id);
  const { data: lists, isLoading: isLoadingLists } = useGetListsByUser();
  const { addNewMovie } = useAddList();
  const { createNewRating } = useNewRating();
  const {
    data: ratings,
    isLoading: isLoadingRatings,
    refetch,
  } = useGetRatingByMovie(id);

  const token = sessionStorage.getItem('token');
  const isAuthenticated = !!token;

  const handleAddMovieToList = (listId) => {
    addNewMovie(
      { movie: data.id, listId },
      {
        onSuccess: () => {
          setToastMessage('Filme adicionado com sucesso!');
          setToastOpen(true);
        },
        onError: () => {
          setToastMessage('Erro ao adicionar o filme à lista.');
          setToastOpen(true);
        },
      }
    );
  };

  return (
    !isLoading && (
      <div className="text-white p-6 max-w-screen-lg mx-auto">
        <Toast.Provider>
          <div className="flex gap-12">
            <div className="flex flex-col items-center">
              <img
                src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                alt={data?.title}
                className="rounded-lg shadow-md"
              />

              {isAuthenticated ? (
                <Popover.Root>
                  <Popover.Trigger asChild>
                    <button className="bg-azulprimario text-white mt-4 px-4 py-2 rounded-lg hover:bg-blue-700">
                      Adicionar
                    </button>
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content className="z-10 w-64 mt-2 bg-white text-gray-800 rounded-lg shadow-lg p-4 border border-gray-200">
                      {isLoadingLists ? (
                        <p className="text-center">Carregando...</p>
                      ) : lists && lists.length > 0 ? (
                        <ul>
                          {lists.map((list) => (
                            <li
                              key={list._id}
                              className="p-2 hover:bg-gray-100 cursor-pointer rounded"
                              onClick={() => handleAddMovieToList(list._id)}
                            >
                              {list.name}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-center">Nenhuma lista encontrada.</p>
                      )}
                      <Popover.Arrow className="fill-white" />
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              ) : (
                <p className="mt-4 bg-yellow-200 text-yellow-800 px-4 py-2 rounded-lg text-center">
                  Faça login para adicionar filmes às suas listas.
                </p>
              )}
            </div>

            <div>
              <h1 className="text-3xl font-bold">{data?.title}</h1>
              <p className="mt-4">{data?.overview}</p>
              <div className="mt-6">
                <p className="font-bold">
                  Gêneros:{' '}
                  {data?.genres?.map((genre) => genre.name).join(', ') ||
                    'Desconhecido'}
                </p>
                <p>
                  <span className="font-bold">Lançamento: </span>
                  {data?.release_date || 'Data desconhecida'}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">
              Deixe sua Avaliação!
            </h2>
            {isAuthenticated ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  createNewRating(
                    {
                      movie: data,
                      rating,
                      message,
                    },
                    { onSuccess: () => refetch() }
                  );
                }}
                className="flex flex-col gap-4"
              >
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      size={30}
                      className={`cursor-pointer ${
                        star <= (hover || rating)
                          ? 'text-yellow-400'
                          : 'text-gray-600'
                      }`}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHover(star)}
                      onMouseLeave={() => setHover(0)}
                    />
                  ))}
                </div>
                <textarea
                  className="w-full p-2 rounded-lg border border-gray-300 bg-gray-800 text-white"
                  placeholder="Deixe sua mensagem aqui..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button className="bg-azulprimario text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Enviar
                </button>
              </form>
            ) : (
              <p className="text-gray-400">
                Faça login para deixar uma avaliação.
              </p>
            )}
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Avaliações</h2>
            <div className="space-y-4">
              {!isLoadingRatings && ratings && ratings.length > 0 ? (
                ratings.map((rating, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-gray-800 shadow-md"
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            size={20}
                            className={`${
                              i < rating.rating
                                ? 'text-yellow-400'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-400">
                        {rating.user?.name || 'Anônimo'}
                      </p>
                    </div>
                    <p className="mt-2">{rating.message}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">Nenhuma avaliação encontrada.</p>
              )}
            </div>
          </div>

          {/* Toast Component */}
          <Toast.Root
            className="fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg"
            open={toastOpen}
            onOpenChange={setToastOpen}
          >
            <Toast.Title>{toastMessage}</Toast.Title>
            <Toast.Close className="absolute top-2 right-2 text-gray-400 hover:text-white">
              ✕
            </Toast.Close>
          </Toast.Root>
          <Toast.Viewport />
        </Toast.Provider>
      </div>
    )
  );
};
