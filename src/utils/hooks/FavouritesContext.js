import React from 'react';

const FavouritesContext = React.createContext({});

export const FavouritesProvider = FavouritesContext.Provider;
export const FavouritesConsumer = FavouritesContext.Consumer;
export default FavouritesContext;
