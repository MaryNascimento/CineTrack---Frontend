import * as Tabs from '@radix-ui/react-tabs';
import * as Popover from '@radix-ui/react-popover';
import { useUserData } from '../hooks/user/use-user-data';
import { useGetRatingByUser } from '../hooks/ratings/use-rating-by-user-id';
import { useState } from 'react';
import { useCreateList } from '../hooks/lists/use-create-list';
import { useGetListsByUser } from '../hooks/lists/use-lists-by-user-id';
import userphoto from '../assets/user-icon.svg';
import { FaStar } from 'react-icons/fa';
import { useGetRecomendations } from '../hooks/movies/use-get-recomendations';
import { CardFilme } from '../components/cardMovies/card';

export const Profile = () => {
  const [newList, setNewList] = useState('');
  const { data, isLoading } = useUserData();
  const { data: ratings, isLoading: isLoadingRatings } = useGetRatingByUser();
  const {
    data: lists,
    isLoading: isLoadingLists,
    refetch,
  } = useGetListsByUser();
  const { createNewList } = useCreateList();
  const { data: Recomendations, isLoading: isLoadingRecomendations } =
    useGetRecomendations();

  return (
    !isLoading && (
      <div className="bg-dark text-white min-h-screen">
        {/* Cabeçalho */}
        <header className="bg-azultres p-8 text-center">
          <div className="flex flex-col items-center">
            <img
              src={userphoto}
              alt="Ícone do usuário"
              className="w-24 h-24 rounded-full mb-2"
            />
            <h1 className="text-xl font-bold">@{data.username}</h1>
            <p className="text-sm">{data.email}</p>
            <div className="flex justify-center gap-4 mt-2">
              <p>{data.ratings.length} Avaliações</p>
              <p>{data.lists.length} Listas</p>
            </div>
          </div>
        </header>

        {/* Tabs */}
        <div className="container mx-auto p-4">
          <Tabs.Root defaultValue="tab1" className="text-white">
            <Tabs.List className="flex justify-center gap-4 border-b-2 pb-2 mb-4">
              <Tabs.Trigger
                value="tab1"
                className="px-4 py-2 font-semibold rounded transition-colors duration-200 data-[state=active]:bg-blue-700 data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                Avaliações
              </Tabs.Trigger>
              <Tabs.Trigger
                value="tab2"
                className="px-4 py-2 font-semibold rounded transition-colors duration-200 data-[state=active]:bg-blue-700 data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                Listas
              </Tabs.Trigger>
              <Tabs.Trigger
                value="tab3"
                className="px-4 py-2 font-semibold rounded transition-colors duration-200 data-[state=active]:bg-blue-700 data-[state=active]:text-white data-[state=active]:shadow-md"
              >
                Recomendações
              </Tabs.Trigger>
            </Tabs.List>

            {/* Avaliações */}
            <Tabs.Content value="tab1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {!isLoadingRatings &&
                  ratings.map((rating) => (
                    <div
                      key={rating._id}
                      className="bg-gray-800 p-4 rounded shadow-lg flex gap-4"
                    >
                      {/* Imagem do pôster */}
                      <img
                        src={`https://image.tmdb.org/t/p/w200${rating.movie.poster_path}`}
                        alt={rating.movie.title}
                        className="w-16 h-24 object-cover rounded"
                      />

                      <div className="flex flex-col justify-between min-h-[96px] w-full">
                        {/* Título */}
                        <h2 className="font-bold text-lg break-words max-h-[48px] overflow-hidden">
                          {rating.movie.title}
                        </h2>

                        {/* Mensagem */}
                        <p className="text-sm text-gray-400 line-clamp-2 overflow-hidden">
                          {rating.message}
                        </p>

                        {/* Estrelas */}
                        <div className="flex mt-1 text-yellow-500">
                          {[...Array(5)].map((_, index) => (
                            <FaStar
                              key={index}
                              className={
                                index < rating.rating
                                  ? 'text-yellow-500'
                                  : 'text-gray-500'
                              }
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </Tabs.Content>

            {/* Listas */}
            <Tabs.Content value="tab2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Suas Listas</h2>
                <Popover.Root>
                  <Popover.Trigger asChild>
                    <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600">
                      Nova Lista
                    </button>
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content
                      className="bg-white text-black p-4 rounded shadow-lg"
                      sideOffset={5}
                    >
                      <form
                        className="flex flex-col gap-2"
                        onSubmit={(e) => {
                          e.preventDefault();
                          createNewList(
                            { name: newList },
                            { onSuccess: () => refetch() }
                          );
                        }}
                      >
                        <label htmlFor="listName" className="font-bold text-sm">
                          Nome da Lista
                        </label>
                        <input
                          id="listName"
                          value={newList}
                          onChange={(e) => setNewList(e.target.value)}
                          placeholder="Digite o nome"
                          className="border p-2 rounded w-full"
                        />
                        <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600">
                          Criar
                        </button>
                      </form>
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {!isLoadingLists &&
                  lists.map((list) => (
                    <div
                      key={list.name}
                      className="bg-gray-800 p-4 rounded shadow-lg"
                    >
                      <h3 className="font-bold">{list.name}</h3>
                    </div>
                  ))}
              </div>
            </Tabs.Content>

            {/* Recomendações */}
            <Tabs.Content value="tab3">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {!isLoadingRecomendations &&
                  Recomendations.map((movie, index) => (
                    <div key={index}>
                      <CardFilme
                        imageSrc={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
                        altText={movie?.title}
                        caption={movie?.title}
                        id={movie?.id}
                      />
                    </div>
                  ))}
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    )
  );
};
