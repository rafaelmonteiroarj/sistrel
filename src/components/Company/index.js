import React from 'react';

import Player from '../Player';
import Information from '../Information';

import * as S from './styles';

const Company = () => {
  return (
    <>
      <S.Company>
        <Player />
        <Information />
      </S.Company>
    </>
  );
};

export default Company;
