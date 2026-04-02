import { useMovies } from "../context/MovieContext";
import GenreSection from "./GenreSection";
import HeroSection from "./HeroSection";
import MovieDetails from "./MovieDetails";
import MovieSlider from "./MovieSlider";

const MovieContent = () => {
  const {
    trendingMovies,
    popularMovies,
    topRatedMovies,
    selectedMovieId,
    openMoviesDetails,
    closeMovieDetails,
    error,
  } = useMovies();
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h2 className="text-2xl font-bold mt-4">Error Loading Movies</h2>
          <p className="mt-2 text-neutral-400">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }
  return (
    <>
      <HeroSection />
      <div className="bg-linear-to-b from-neutral-900 to-neutral-950">
        <MovieSlider
          title="Trending This Week"
          subtitle="Stay Updated with what everyones watching"
          movies={trendingMovies}
          id="trending"
        />
        <MovieSlider
          title="Popular Movies"
          subtitle="Most Watched Movies Right Now"
          movies={popularMovies}
          id="popular"
        />
        <MovieSlider
          title="Top Rated Movies"
          subtitle="Top Rated Movies Right Now"
          movies={topRatedMovies}
          id="top-rated"
        />
        <GenreSection />
      </div>
      {selectedMovieId && (
        <MovieDetails movieId={selectedMovieId} onClose={closeMovieDetails} />
      )}
    </>
  );
};

export default MovieContent;
