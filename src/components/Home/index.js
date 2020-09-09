import React from 'react';

import Single from '../Single';
import Player from './player';
import Information from './information';
import Specialty from './specialty';
import Partners from './partners';
import PaymentsAndCertificates from './paymentsAndCertificates';

import * as S from './styles';

const Home = () => {
  return (
    <>
      <Single sectionEnabled>
        <S.Title>TRADIÇÃO E QUALIDADE</S.Title>
        <S.Description>
          A mais de 28 anos no mercado, oferecendo qualidade.
        </S.Description>
        <S.Company>
          <Player />
          <Information />
        </S.Company>
        <Specialty />
        <Partners />
        <S.Line />
        <PaymentsAndCertificates />
      </Single>
    </>
  );
};

export default Home;
