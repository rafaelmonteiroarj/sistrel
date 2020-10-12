import React from 'react';

import Single from '../../components/Single';
import Highlights from '../../components/Highlights';
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
        <S.Information>
          <p>
            A Sistrel é uma empresa especializada no ramo da construçao civil há
            mais de 28 anos e especializada e certificada para Fornecimento e
            soluçoes para Lajes e PréFabricadas tendo como seus principais
            produtos viga, cortina, painel, placa, placas sob medidas , Lajes
            alveolar e Protensão certificados pelos programas de qualidade PSQL
            e normas exigidas pela ABNT.
          </p>

          <p>
            Tendo um equipe de profissionais qualificados para Solucoes e
            inovações de projetos e artefatos de concreto e fornecimento de ART
            tem o comprometimento e a responsabilidade com seus clientes,
            prestando um bom atendimento desde o inicio do orçamento até
            finalizaçãoda da compra e com pós venda.
          </p>

          <p>
            A empresa utiliza equipamentos desenvolvidos para produzir os
            materiais sob medida para diversos tipos de obras.
          </p>

          <p>
            Nossas Materias primas são todas certificadas garantindo um produto
            final com qualidade e segurança para nossos clientes.
          </p>
        </S.Information>
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
