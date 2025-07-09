// app/layout.js
import '../styles/globals.css';

export const metadata = {
  title: 'Movie Directory',
  description: 'Browse movies with routing in Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ padding: '1rem', background: '#222', color: '#fff' }}>
          <a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
