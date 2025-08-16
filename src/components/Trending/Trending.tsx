import type { IMovie } from '../../types/movie';
import styles from './Trending.module.css';

interface TrendingProps {
  movies: IMovie[];
  onMovieClick: (movie: IMovie) => void;
}

function Trending({ movies, onMovieClick }: TrendingProps) {
  return (
    <div className={styles.trending}>
      <h2>Trending Now</h2>
      <div className={styles.carousel}>
        {movies.map((movie) => (
          <img
            key={movie.Id}
            src={`/assets/images/${movie.CoverImage}`}
            alt={movie.Title}
            className={styles.item}
            onClick={() => onMovieClick(movie)}
          />
        ))}
      </div>
    </div>
  );
}

export default Trending;