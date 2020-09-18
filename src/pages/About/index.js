import React from 'react';

import Single from '../../components/Single';
import Highlights from '../../components/Highlights';
import Company from '../../components/Company';
import Specialty from '../../components/Specialty';
import PaymentsAndCertificates from '../../components/PaymentsAndCertificates';
import Line from '../../components/UI/Line';

import * as S from './styles';

const About = () => {
  return (
    <>
      <Single sectionEnabled={false}>
        <Highlights
          title="TRADIÇÃO E QUALIDADE"
          description="A mais de 28 anos no mercado, oferecendo qualidade."
        />
        <Company />
        <S.CommitmentWrapper>
          <S.Commitment>
            <S.Title>Missão</S.Title>
            <S.Description>
              Oferecer produtos e serviços de lajes e pré-fabricados para
              construção Civil, de maneira econômica, confiável e qualificada.
            </S.Description>
          </S.Commitment>
          <S.Commitment>
            <S.Title>VISÃO</S.Title>
            <S.Description>
              Ser reconhecido como grupo sólido e competente de grande
              referência na Construção Civil Brasileira.
            </S.Description>
          </S.Commitment>
          <S.Commitment>
            <S.Title>VALORES</S.Title>
            <S.Description>
              <S.Text>- Respeito sócio-cultural.</S.Text>
              <S.Text>- Empatia com seus clientes.</S.Text>
              <S.Text>- Qualidade nos produtos/serviços.</S.Text>
              <S.Text>- Excelência em atendimento.</S.Text>
              <S.Text>- Cumprimento de prazos.</S.Text>
              <S.Text>- Melhor relação Custo x Benefício.</S.Text>
              <S.Text>- Pioneirismo.</S.Text>
              <S.Text>- Ajustes a necessidade de cada cliente.</S.Text>
            </S.Description>
          </S.Commitment>
        </S.CommitmentWrapper>
        <Specialty />
        <Line />
        <PaymentsAndCertificates />
      </Single>
    </>
  );
};

export default About;
