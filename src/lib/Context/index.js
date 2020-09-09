import React, { createContext, useState } from 'react';

import { menu } from './states';

const initialContext = {
  menu,
  setContext: () => {
    throw new Error('setContext function must be overridden');
  }
};

const AppContext = createContext(initialContext);

const AppContextProvider = ({ children }) => {
  const [contextState, setContext] = useState(initialContext);

  return (
    <AppContext.Provider value={{ ...contextState, setContext }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
