import { Command, CommandInput, CommandList, CommandItem } from 'cmdk';
import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useSearchMovies } from '../hooks/movies/use-search-movie';
import { useNavigate } from 'react-router-dom';

// Função para debounce
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export const SearchBar = () => {
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  // Adiciona debounce ao valor do input
  const debouncedSearch = useDebounce(search, 500);

  // Chama o hook com o valor após o debounce
  const { data, isLoading } = useSearchMovies(debouncedSearch);

  return (
    <Command>
      <div className="relative">
        {/* Barra de pesquisa */}
        <div className="flex relative pb-1">
          <CommandInput
            placeholder="Busque por seus títulos favoritos..."
            value={search}
            onValueChange={setSearch}
            className="py-2 px-3 text-sm rounded-full w-96 text-gray-700 outline-none"
          />
          <FiSearch className="absolute text-gray-400 right-4 bottom-4" />
        </div>

        {/* Resultados no popover */}
        {search && (
          <div className="absolute mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-w-60 max-h-60 overflow-auto z-50">
            <CommandList>
              {isLoading && (
                <p className="px-4 py-2 text-sm text-gray-500">Carregando...</p>
              )}
              {!isLoading && data?.length === 0 && (
                <p className="px-4 py-2 text-sm text-gray-500">
                  Nenhum resultado encontrado.
                </p>
              )}
              {!isLoading &&
                data?.movies?.map((movie) => (
                  <CommandItem
                    key={movie.id}
                    className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 text-gray-700"
                    onSelect={() => navigate(`/movie/${movie.id}`)}
                  >
                    {movie.title}
                  </CommandItem>
                ))}
            </CommandList>
          </div>
        )}
      </div>
    </Command>
  );
};
