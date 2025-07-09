// app/movies/[id]/page.js
import movies from '../../../data/movies';
import styles from '../../../styles/Movie.module.css';

export default function MovieDetail({ params }) {
  const movie = movies.find(m => m.id === params.id);

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div className={styles.container}>
      <img src={movie.poster} alt={movie.title} className={styles.poster} />
      <h1>{movie.title} ({movie.year})</h1>
      <p>{movie.description}</p>
    </div>
  );
}
