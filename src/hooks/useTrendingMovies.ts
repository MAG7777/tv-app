import { useEffect, useState } from 'react';
import type { IMovie } from '../types/movie';
import data from '../data.json';

export function useTrendingMovies() {
    const [trending, setTrending] = useState<IMovie[]>([]);

    useEffect(() => {
        const sortedTrending = [...data.TrendingNow]
            .sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime())
            .slice(0, 50);

        const storedId = sessionStorage.getItem('lastMovieID');
        if (storedId) {
            const lastMovie = sortedTrending.find(m => m.Id === storedId);
            if (lastMovie) {
                const filtered = sortedTrending.filter(m => m.Id !== storedId);
                setTrending([lastMovie, ...filtered]);
                return;
            }
        }
        setTrending(sortedTrending);
    }, []);

    return { trending, setTrending };
}
