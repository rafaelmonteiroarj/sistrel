import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';
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
        <ToastContainer autoClose={2000} />
      </BrowserRouter>
    </>
  );
};

export default App;
