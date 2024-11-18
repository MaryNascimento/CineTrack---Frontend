import { CardFilme } from '../cardMovies/card'; // Make sure the path is correct
import { useNowPlayingMovies } from '../../hooks/movies/use-now-playing';

export const CarrosselFilmes = () => {
  const { data, isLoading } = useNowPlayingMovies();
  return (
    <div className="flex justify-between gap-4 w-full mt-4">
      {!isLoading &&
        data.map((movie, index) => (
          <div key={index}>
            <CardFilme
              imageSrc={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
              altText={movie?.title}
              caption={movie?.title}
            />
          </div>
        ))}
    </div>
  );
};
