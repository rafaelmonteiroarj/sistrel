import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import App from './App';
import { AppContextProvider } from './lib/Context';
import client from './config/client';

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
