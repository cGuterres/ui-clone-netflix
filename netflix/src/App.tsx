import { useEffect, useState } from 'react';
import Tmdb from './Tmdb';

function App() {
  const [movieList, setMovieList] = useState<any>([]);

  useEffect(() => {
    const loadAll = async () => {
      const list = await Tmdb.getHomeList();
      setMovieList(list);
    };

    loadAll();
  }, []);

  return <div className="">Olá mundo</div>;
}

export default App;
