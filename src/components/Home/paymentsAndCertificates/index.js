import React from 'react';

import * as S from './styles';

const PaymentsAndCertificates = () => {
  return (
    <S.Wrapper>
      <S.Menu>
        <S.Item>
          <S.LineCertificate>Associados</S.LineCertificate>
          <S.Image src="images/bndes.png" alt="BNDES" width="200px" />
        </S.Item>
        <S.Item>
          <S.LineCertificate>Formas de pagamento</S.LineCertificate>
          <S.Image
            src="images/payments.png"
            alt="Formas de Pagamentos"
            width="300px"
          />
        </S.Item>
        <S.Item>
          <S.LineCertificate>Qualificações</S.LineCertificate>
          <S.Image src="images/psql.png" alt="PSQ-L" width="100px" />
          <S.Image
            src="images/abcic.png"
            alt="Associação Brasileira da Construção Industrializada de Concreto"
            width="100px"
          />
        </S.Item>
      </S.Menu>
    </S.Wrapper>
  );
};

export default PaymentsAndCertificates;
