import { useNavigate } from 'react-router-dom';
import { useGetUpcomingMovies } from '../hooks/movies/use-get-upcoming.js';
import { CardFilme } from './cardMovies/card.jsx';

export const Upcoming = () => {
  const { data, isLoading } = useGetUpcomingMovies();
  const navigate = useNavigate();
  return (
    <div className="text-white p-4 mt-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold ">EM BREVE</h1>
        <button
          className="bg-azulsecundario w-36 h-8 p-2 rounded-full inline-flex items-center justify-center font-medium"
          onClick={() => navigate('/filters?category=upcoming')}
        >
          VER TODOS
        </button>
      </div>

      <div className="flex justify-between gap-4 w-full mt-4">
        {!isLoading &&
          data.slice(0, 6).map((movie, index) => (
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
    </div>
  );
};
