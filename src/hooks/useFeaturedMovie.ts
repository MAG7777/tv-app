import { useEffect, useState } from 'react';
import type { IMovie } from '../types/movie';

export function useFeaturedMovie(initialMovie: IMovie) {
    const [featured, setFeatured] = useState<IMovie>(initialMovie);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    useEffect(() => {
        if (featured.VideoUrl) {
            setIsVideoPlaying(false);
            const timer = setTimeout(() => setIsVideoPlaying(true), 2000);
            return () => clearTimeout(timer);
        } else {
            setIsVideoPlaying(false);
        }
    }, [featured]);

    const handleMovieClick = (movie: IMovie) => {
        setFeatured(movie);
        sessionStorage.setItem('lastMovieID', movie.Id);
    };

    return { featured, isVideoPlaying, handleMovieClick, setFeatured };
}
