import { useSearchParams } from 'react-router-dom';
import FiltersSidebar from '../components/filtersSideBar';
import { useFilterMovies } from '../hooks/movies/use-filter-movies';
import { useEffect } from 'react';
import { useNowPlayingMovies } from '../hooks/movies/use-now-playing';
import { useGetUpcomingMovies } from '../hooks/movies/use-get-upcoming';
import { CardFilme } from '../components/cardMovies/card';

export const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Converte os parâmetros da URL em um objeto de filtros para a API
  const filters = Object.fromEntries([...searchParams]);

  // Obtemos os filmes de "Now Playing" ou "Upcoming" com base na categoria
  const category = filters.category;
  const { data: NowPlaying, isLoading: isLoadingNowPlaying } =
    useNowPlayingMovies();
  const { data: Upcoming, isLoading: isLoadingUpcoming } =
    useGetUpcomingMovies();

  const {
    data: movies,
    isLoading,
    isError,
    message,
    refetch,
  } = useFilterMovies(filters);

  // Atualiza os filtros na URL quando o usuário altera algum filtro
  const updateFilter = (key, value) => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (value) {
      newSearchParams.set(key, value); // Adiciona ou atualiza o parâmetro
    } else {
      newSearchParams.delete(key); // Remove o parâmetro se o valor for nulo
    }

    // Atualiza a URL com os novos parâmetros
    setSearchParams(newSearchParams);
  };

  // Garante que a consulta seja reexecutada toda vez que searchParams mudar
  useEffect(() => {
    // Force o refetch quando os parâmetros de busca mudarem
    refetch();
  }, [searchParams, refetch]);

  // Determina qual conjunto de filmes exibir com base na categoria
  let displayMovies = [];
  let isLoadingCategory = false;

  if (category === 'available') {
    displayMovies = NowPlaying;
    isLoadingCategory = isLoadingNowPlaying;
  } else if (category === 'upcoming') {
    displayMovies = Upcoming;
    isLoadingCategory = isLoadingUpcoming;
  } else {
    displayMovies = movies; // Caso nenhum filtro de categoria esteja presente
    isLoadingCategory = isLoading;
  }

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar com filtros */}
      <FiltersSidebar filters={filters} onFilterChange={updateFilter} />

      {/* Catálogo de resultados */}
      <div style={{ flex: 1, padding: '1rem' }}>
        {isLoadingCategory ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>{message}</p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {displayMovies?.map((movie, index) => (
              <div key={index} className="text-white">
                <CardFilme
                  imageSrc={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
                  altText={movie?.title}
                  caption={movie?.title}
                  id={movie?.id}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
