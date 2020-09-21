import React from 'react';

import Single from '../../components/Single';
import PaymentsAndCertificates from '../../components/PaymentsAndCertificates';
import Highlights from '../../components/Highlights';
import Line from '../../components/UI/Line';

// import * as S from './styles';

const Contact = () => {
  return (
    <>
      <Single sectionEnabled={false}>
        <Highlights
          title="TEMOS A SOLUÇÃO IDEAL PARA SUA OBRA"
          description="Entre em contato conosco para que possamos indicar o melhor produto para sua obra."
        />

        <div>sdfs</div>
        <Line />
        <PaymentsAndCertificates />
      </Single>
    </>
  );
};

export default Contact;
