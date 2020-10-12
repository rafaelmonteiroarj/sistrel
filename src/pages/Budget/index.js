import React from 'react';

import Single from '../../components/Single';
import PaymentsAndCertificates from '../../components/PaymentsAndCertificates';
import Highlights from '../../components/Highlights';
import Map from '../../components/Map';

import Line from '../../components/UI/Line';
import Form from './form';

import * as S from './styles';

const Budget = () => {
  return (
    <>
      <Single sectionEnabled={false}>
        <Highlights
          title="TEMOS A SOLUÇÃO IDEAL PARA SUA OBRA"
          description="Entre em contato conosco para que possamos indicar o melhor produto para sua obra."
        />
        <S.BudgetWrapper>
          <Form />
          <S.Information>
            <S.LineTitle />
            <S.Title>Localização</S.Title>
            <Map />
          </S.Information>
        </S.BudgetWrapper>
        <Line />
        <PaymentsAndCertificates />
      </Single>
    </>
  );
};

export default Budget;
