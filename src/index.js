import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { AppContextProvider } from './lib/Context';

ReactDOM.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>,
  document.getElementById('root')
);
