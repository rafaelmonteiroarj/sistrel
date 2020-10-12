import React from 'react';

import Single from '../../components/Single';
import PaymentsAndCertificates from '../../components/PaymentsAndCertificates';
import Highlights from '../../components/Highlights';

import Line from '../../components/UI/Line';
import Form from './form';

import * as S from './styles';

const Provider = () => {
  return (
    <>
      <Single sectionEnabled={false}>
        <Highlights
          title="QUERO SER FORNECEDOR"
          description="Por favor, preencha os dados abaixo para que possamos entrar em contato."
        />
        <S.BudgetWrapper>
          <Form />
        </S.BudgetWrapper>
        <Line />
        <PaymentsAndCertificates />
      </Single>
    </>
  );
};

export default Provider;
