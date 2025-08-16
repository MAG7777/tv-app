import { useEffect, useState } from 'react';
import './App.css'; // If needed, but we'll use modules
import type { IData, IMovie } from './types/movie';
import Menu from './components/Menu/Menu';
import Featured from './components/Featured/Featured';
import Trending from './components/Trending/Trending';
import data from './data.json';

const jsonData: IData = data as IData;

function App() {
  const [featured, setFeatured] = useState<IMovie>(jsonData.Featured);
  const [trending, setTrending] = useState<IMovie[]>([]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const sortedTrending = [...jsonData.TrendingNow].sort((a, b) => 
      new Date(b.Date).getTime() - new Date(a.Date).getTime()
    ).slice(0, 50);

    const storedId = sessionStorage.getItem('lastMovieID');
    console.log('Stored ID from session:', storedId); // Debug
    if (storedId) {
      const lastMovie = sortedTrending.find(m => m.Id === storedId);
      console.log('Found last movie:', lastMovie); // Debug
      if (lastMovie) {
        const filtered = sortedTrending.filter(m => m.Id !== storedId);
        setTrending([lastMovie, ...filtered]);
      } else {
        setTrending(sortedTrending);
      }
    } else {
      setTrending(sortedTrending);
    }
  }, []);

  const handleMovieClick = (movie: IMovie) => {
    setFeatured(movie);
    sessionStorage.setItem('lastMovieID', movie.Id);
    setIsVideoPlaying(false);
    setTimeout(() => {
      if (movie.VideoUrl) {
        setIsVideoPlaying(true);
      }
    }, 2000);
  };

  const handleVideoError = () => {
    console.error('Video failed to load:', featured.VideoUrl);
    setIsVideoPlaying(false); // Revert to image
  };

  return (
    <div className="app-container">
      <Menu />
      <div className="main-content">
        <Featured 
          key={featured.Id} 
          movie={featured} 
          isVideoPlaying={isVideoPlaying} 
          onVideoError={handleVideoError} 
        />
        <Trending movies={trending} onMovieClick={handleMovieClick} />
      </div>
    </div>
  );
}

export default App;