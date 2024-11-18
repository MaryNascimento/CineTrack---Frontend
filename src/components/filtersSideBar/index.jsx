import { useGetGenres } from '../../hooks/movies/use-get-genres';
import PropTypes from 'prop-types'; // Importa PropTypes
import * as Select from '@radix-ui/react-select';
import { useState } from 'react';

const FiltersSidebar = ({ filters, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('none'); // Usando 'none' para inicializar

  // Sincroniza o estado local com o filtro da categoria
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onFilterChange(name, value); // Atualiza o filtro quando o usuário altera algum valor
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);

    // Não passa 'none' para o filtro de categoria
    if (value !== 'none') {
      onFilterChange('category', value); // Passa o filtro da categoria
    } else {
      onFilterChange('category', undefined); // Ou seja, não passamos o filtro
    }
  };

  const handleGenreChange = (value) => {
    onFilterChange('genre', value); // Atualiza o filtro do gênero
  };

  const handleSortChange = (value) => {
    onFilterChange('sort_by', value); // Atualiza o filtro de ordenação
  };

  const { data, isLoading } = useGetGenres();

  // Função para garantir que o nome do gênero seja exibido corretamente
  const getGenreNameById = (genreId) => {
    if (!data) return 'Todos'; // Fallback se 'data' estiver vazio
    const genre = data.find((genre) => genre.id === parseInt(genreId)); // Converta o ID do gênero para int antes de comparar
    return genre ? genre.name : 'Todos'; // Retorne 'Todos' se o gênero não for encontrado
  };

  return (
    <div className="w-64 p-6 border-r border-gray-700 flex flex-col gap-6 bg-gray-900 text-white">
      {/* Filtro de categoria */}
      <div className="space-y-2">
        <label className="font-semibold text-sm">Categoria</label>
        <Select.Root
          value={selectedCategory}
          onValueChange={handleCategoryChange}
        >
          <Select.Trigger className="p-3 border border-gray-700 rounded-md cursor-pointer w-full flex justify-between items-center bg-gray-800 text-white">
            <span>
              {selectedCategory === 'none'
                ? 'Selecione'
                : selectedCategory === 'available'
                  ? 'Lançamentos'
                  : 'Em Breve'}
            </span>
          </Select.Trigger>
          <Select.Content className="bg-gray-800 border border-gray-700 rounded-md shadow-lg w-full mt-2">
            <Select.Item
              value="none"
              className="p-3 cursor-pointer hover:bg-gray-700"
            >
              Selecione
            </Select.Item>
            <Select.Item
              value="available"
              className="p-3 cursor-pointer hover:bg-gray-700"
            >
              Lançamentos
            </Select.Item>
            <Select.Item
              value="upcoming"
              className="p-3 cursor-pointer hover:bg-gray-700"
            >
              Em Breve
            </Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      {/* Ordenação */}
      <div className="space-y-2">
        <label className="font-semibold text-sm">Ordenar por</label>
        <Select.Root
          value={filters.sort_by || null} // Permite valor null para limpar
          onValueChange={handleSortChange}
        >
          <Select.Trigger className="p-3 border border-gray-700 rounded-md cursor-pointer w-full flex justify-between items-center bg-gray-800 text-white">
            <span>{filters.sort_by || 'Selecione'}</span>
          </Select.Trigger>
          <Select.Content className="bg-gray-800 border border-gray-700 rounded-md shadow-lg w-full mt-2">
            <Select.Item
              value={null} // Valor null para limpar a ordenação
              className="p-3 cursor-pointer hover:bg-gray-700"
            >
              Nenhuma Ordenação
            </Select.Item>
            <Select.Item
              value="title.asc"
              className="p-3 cursor-pointer hover:bg-gray-700"
            >
              Ordem alfabética (A-Z)
            </Select.Item>
            <Select.Item
              value="title.desc"
              className="p-3 cursor-pointer hover:bg-gray-700"
            >
              Ordem alfabética (Z-A)
            </Select.Item>
          </Select.Content>
        </Select.Root>
      </div>

      {/* Filtro de gênero */}
      <div className="space-y-2">
        <label className="font-semibold text-sm">Gênero</label>
        <Select.Root
          value={filters.genre || null}
          onValueChange={handleGenreChange} // Passa o filtro do gênero
        >
          <Select.Trigger className="p-3 border border-gray-700 rounded-md cursor-pointer w-full flex justify-between items-center bg-gray-800 text-white">
            {/* Exibe o nome do gênero selecionado */}
            <span>{getGenreNameById(filters.genre)}</span>
          </Select.Trigger>
          <Select.Content className="bg-gray-800 border border-gray-700 rounded-md shadow-lg w-full mt-2">
            <Select.Item
              value={null}
              className="p-3 cursor-pointer hover:bg-gray-700"
            >
              Todos
            </Select.Item>
            {!isLoading &&
              data?.map((genre) => (
                <Select.Item
                  key={genre.id}
                  value={genre.id}
                  className="p-3 cursor-pointer hover:bg-gray-700"
                >
                  {genre.name}
                </Select.Item>
              ))}
          </Select.Content>
        </Select.Root>
      </div>

      {/* Data de lançamento */}
      <div className="space-y-2">
        <label className="font-semibold text-sm">Data de lançamento (de)</label>
        <input
          type="date"
          name="release_date.gte"
          value={filters['release_date.gte'] || ''}
          onChange={handleInputChange}
          className="p-3 border border-gray-700 rounded-md w-full bg-gray-800 text-white"
        />
      </div>
      <div className="space-y-2">
        <label className="font-semibold text-sm">
          Data de lançamento (até)
        </label>
        <input
          type="date"
          name="release_date.lte"
          value={filters['release_date.lte'] || ''}
          onChange={handleInputChange}
          className="p-3 border border-gray-700 rounded-md w-full bg-gray-800 text-white"
        />
      </div>
    </div>
  );
};

// Validação das props com PropTypes
FiltersSidebar.propTypes = {
  filters: PropTypes.object.isRequired, // Espera um objeto para 'filters'
  onFilterChange: PropTypes.func.isRequired, // Espera uma função para 'onFilterChange'
};

export default FiltersSidebar;
