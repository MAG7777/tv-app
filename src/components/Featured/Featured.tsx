import type { IMovie } from '../../types/movie';
import styles from './Featured.module.css';

interface FeaturedProps {
  movie: IMovie;
  isVideoPlaying: boolean;
  onVideoError: () => void; // Callback to handle video error
}

function Featured({ movie, isVideoPlaying, onVideoError }: FeaturedProps) {
  const durationSeconds = Number(movie.Duration);
  const hours = Math.floor(durationSeconds / 3600);
  const minutes = Math.floor((durationSeconds % 3600) / 60);
  const durationStr = `${hours ? `${hours}h ` : ''}${minutes}m`;

  return (
    <div className={styles.featured}>
      <div className={styles.background}>
        {isVideoPlaying && movie.VideoUrl ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            src={movie.VideoUrl}
            className={styles.video}
            onError={onVideoError} // Trigger parent callback on error
          />
        ) : (
          <img
            src={`/assets/images/${movie.CoverImage}`}
            alt={movie.Title}
            className={styles.cover}
          />
        )}
      </div>
      <div className={styles.overlay}>
        <span className={styles.category}>{movie.Category.toUpperCase()}</span>
        <h1 className={styles.title}>{movie.Title}</h1>
        <span className={styles.info}>
          {movie.ReleaseYear} {movie.MpaRating} {durationStr}
        </span>
        <p className={styles.description}>{movie.Description}</p>
        <div className={styles.buttons}>
          <button className={styles.play}>▶ Play</button>
          <button className={styles.moreInfo}>More Info</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;