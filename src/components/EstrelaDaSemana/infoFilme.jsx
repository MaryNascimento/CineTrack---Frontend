import { useMostPopularMovie } from '../../hooks/movies/use-most-popular';
import { useGetMovieById } from '../../hooks/movies/use-movie-by-id';

export const InfosFilme = () => {
  const { data, isLoading } = useMostPopularMovie();
  const { data: movie } = useGetMovieById(data?.id);

  return (
    !isLoading && (
      <div className="flex gap-12">
        <img
          className=""
          src={`https://image.tmdb.org/t/p/w200${data?.poster_path}`}
          alt={data?.title}
        />
        <div className="mt-10">
          <h1 className="text-left text-xl font-bold">{data?.title}</h1>
          <p className="text-left font-light break-all">{data?.overview}</p>
          <div className="mt-4 items-center flex gap-4">
            <div>
              <div className="mt-6">
                <p className="font-bold">
                  Gêneros:{' '}
                  {movie?.genres?.map((genre) => genre.name).join(', ') ||
                    'Desconhecido'}
                </p>
                <p>
                  <span className="font-bold">Lançamento: </span>
                  {movie?.release_date || 'Data desconhecida'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
