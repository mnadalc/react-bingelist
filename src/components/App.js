import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import BingeList from '../pages/BingeList';
import Favourites from '../pages/Favourites';
import { FavouritesProvider } from '../utils/hooks/FavouritesContext';
import { MoviesProvider } from '../utils/hooks/MoviesContext';

import filter from 'lodash/filter';

function App() {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const addFavourite = movie => {
    setFavourites(obj => (obj ? [...obj, movie] : [movie]));
  };

  const removeFavourite = movie => {
    const { id } = movie;
    setFavourites(obj => {
      setFavourites(filter(obj, film => film.id !== id));
    });
  };

  return (
    <div style={{ height: '100vh' }}>
      <FavouritesProvider value={{ favourites, addFavourite, removeFavourite }}>
        <MoviesProvider value={{ movies, setMovies }}>
          <Switch>
            <Route exact path='/' component={BingeList} />
            <Route exact path='/favourites' component={Favourites} />
            <Redirect from='*' to={'/'} />
          </Switch>
        </MoviesProvider>
      </FavouritesProvider>
      <style jsx global>{`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background: rgb(40, 42, 54);
        }

        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }

        .navbar {
          margin-bottom: 2rem;
        }

        .white-label {
          color: white !important;
          text-decoration: none !important;
        }

        .text-info-page {
          text-align: center;
          color: white;
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
}

export default App;
