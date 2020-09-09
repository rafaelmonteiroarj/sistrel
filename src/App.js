import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ResetStyle from './styles/reset';
import GlobaStyle from './styles/global';
import Routes from './routes';

const App = () => {
  return (
    <>
      <ResetStyle />
      <BrowserRouter>
        <GlobaStyle />
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
