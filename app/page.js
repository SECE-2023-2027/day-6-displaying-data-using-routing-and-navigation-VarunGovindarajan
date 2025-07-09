// app/page.js
import Link from 'next/link';
import movies from '../data/movies';
import styles from '../styles/Home.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Movie Directory</h1>
      <div className={styles.grid}>
        {movies.map(movie => (
          <Link key={movie.id} href={`/movies/${movie.id}`} className={styles.card}>
            <img src={movie.poster} alt={movie.title} className={styles.poster} />
            <h2>{movie.title} ({movie.year})</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
