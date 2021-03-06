import React from 'react';

import Single from '../../components/Single';
import PaymentsAndCertificates from '../../components/PaymentsAndCertificates';
import Highlights from '../../components/Highlights';

import Line from '../../components/UI/Line';

import * as S from './styles';

const NotFound = () => {
  return (
    <>
      <Single sectionEnabled={false}>
        <Highlights
          title="Ops..."
          description="Desculpe, mas a página que você está tentando visualizar não existe =("
        />
        <S.NotFoundWrapper>
          <S.Title>404</S.Title>
        </S.NotFoundWrapper>
        <Line />
        <PaymentsAndCertificates />
      </Single>
    </>
  );
};

export default NotFound;
