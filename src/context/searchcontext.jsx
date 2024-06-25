// searchcontext.js

import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [state, setState] = useState({
    searchTerm: '',
    // other initial state properties
  });

  return (
    <SearchContext.Provider value={{ state, setState }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
