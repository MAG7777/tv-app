import Menu from './components/Menu/Menu';
import Featured from './components/Featured/Featured';
import Trending from './components/Trending/Trending';
import data from './data.json';
import { useTrendingMovies } from './hooks/useTrendingMovies';
import { useFeaturedMovie } from './hooks/useFeaturedMovie';
import type { IData } from './types/movie';
import './App.css';

const jsonData: IData = data as IData;

function App() {
  const { trending } = useTrendingMovies();
  const { featured, isVideoPlaying, handleMovieClick } = useFeaturedMovie(jsonData.Featured);

  const handleVideoError = () => {
    console.error('Video failed to load:', featured.VideoUrl);
  };

  return (
    <div className="app-container">
      <Menu />
      <div className="main-content">
        <Featured
          movie={featured}
          isVideoPlaying={isVideoPlaying}
          onVideoError={handleVideoError}
        />
        <Trending
          movies={trending}
          featuredMovie={featured}
          onMovieClick={handleMovieClick}
        />
      </div>
    </div>
  );
}

export default App;