import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

export const Title = styled.div`
  color: var(--color-title);
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  padding-bottom: 1rem;

  ${media.lessThan('620px')`
    font-size: 1.2rem;
  `}

  ${media.lessThan('460px')`
    font-size: 1rem;
  `}
`;

export const SubTitle = styled.div`
  color: var(--color4);
  font-size: 1.4rem;
  font-weight: bold;
  padding: 1rem 0px 1rem 10px;

  ${media.lessThan('620px')`
    font-size: 1rem;
  `}

  ${media.lessThan('460px')`
    font-size: 0.8rem;
  `}
`;

const Product1 = () => {
  return (
    <>
      <Title>ESPECIFICAÇÃO TÉCNICA</Title>
      <p>
        Lajes treliçadas são placas pré-moldadas de concreto armado compostas
        por armações de treliça de aço corrugado. Usadas como reforço e suporte
        para lajes, descartam a necessidade da montagem de tablados de madeira
        sobre os quais convencionalmente se faz a concretagem, reduzindo o
        consumo de fôrmas - que, nesse caso, são usadas apenas para o
        posicionamento das escoras. Com isso, o sistema aumenta a fração de
        industrialização da obra e o desempenho em termos de velocidade
        executiva, geometria e custos de mão de obra.
      </p>
      <SubTitle>ESPECIFICAÇÕES</SubTitle>
      <p>
        Lajes treliçadas são placas pré-moldadas de concreto armado compostas
        por armações de treliça de aço corrugado. Usadas como reforço e suporte
        para lajes, descartam a necessidade da montagem de tablados de madeira
        sobre os quais convencionalmente se faz a concretagem, reduzindo o
        consumo de fôrmas - que, nesse caso, são usadas apenas para o
        posicionamento das escoras. Com isso, o sistema aumenta a fração de
        industrialização da obra e o desempenho em termos de velocidade
        executiva, geometria e custos de mão de obra.
      </p>

      <SubTitle>COTAÇÃO DE PREÇOS E FORNECEDORES</SubTitle>
      <p>
        A especificação técnica do produto depende da capacidade de suporte da
        laje a ser executada. Quanto maior a resistência almejada, maior será a
        altura da treliça e o diâmetro dos fios inferiores das placas. Existem
        lajes treliçadas por vigotas e por painéis. As primeiras possuem uma
        sapata de concreto - em geral de 10 cm de largura por 3 cm de altura -
        onde é posicionada a armação treliçada. Essas vigotas são complementadas
        por enchimentos (blocos de EPS, cerâmicos ou de concreto) que formam o
        piso da laje - uni ou bidirecional. Já as lajes treliçadas por painéis
        possuem uma sapata de concreto a partir de 25 cm. Os painéis são
        colocados lado a lado e a configuração final é similar a uma laje de
        concreto maciça. Como todo produto técnico, a compra das lajes
        treliçadas deve ser objeto de especificação por profissional
        especializado, Segundo o presidente da Abece (Associação Brasileira de
        Engenharia e Consultoria Estrutural), Marcos Monteiro, um erro comum é
        especificar apenas a altura da laje, deixando a cargo do fornecedor a
        definição do dimensionamento das placas. Porém, como o desempenho da
        estrutura depende do conjunto de elementos que a compõe e não de itens
        isolados, é necessário que o projetista especifique também o tipo de
        treliça desejado e, se necessário, armaduras adicionais para compor a
        vigota ou painel treliçado. Além disso, o projeto deve conter as
        armaduras complementares que garantem a ancoragem, armaduras negativas
        e, quando for o caso, armadura de capeamento. Na compra, Francisco
        Graziano, mestre em engenharia de estruturas pela Poli-USP (Escola
        Politécnica da Universidade de São Paulo), recomenda também checar se o
        cobrimento cumpre as normas e especificações de durabilidade
        (cobrimento, Fck, resistência do concreto, fator água/cimento,
        deformabilidade etc.); se a capacidade da laje é adequada às
        solicitações de projeto e se os arranques previstos na produção são
        compatíveis ao bom funcionamento da estrutura. Ou seja: "uma boa dose de
        conversa entre projetista e fabricante, detalhando o que é importante
        para aquela obra específica, é condição", diz.
      </p>

      <SubTitle>LOGÍSTICA</SubTitle>
      <p>
        Quando o produto é entregue na obra, é importante verificar se as
        dimensões da base de concreto e a armação treliçada seguem as
        especificações contratadas. No descarregamento, deve-se cuidar para que
        as peças sejam transportadas por meio dos pontos de apoio recomendados
        pelo fabricante. A atenção às bases das lajes também se ajusta ao
        armazenamento. As placas devem ser armazenadas sobre calços, nas
        distâncias recomendadas. Por serem feitas com fios trefilados, as
        treliças sofrem um processo de oxidação mais acelerado que o aço de
        construção, o que não é prejudicial em períodos curtos de armazenagem.
      </p>

      <SubTitle>CUIDADOS DURANTE A EXECUÇÃO</SubTitle>
      <p>
        Na execução das lajes, os principais cuidados se voltam para o
        posicionamento das escoras (com espaçamentos adequados para a laje que
        será concretada), das armaduras complementares e a vibração adequada da
        concretagem. Para algumas ocasiões, Graziano pondera que a aplicação das
        lajes pode ser postergada à etapa de execução da estrutura. Segundo ele,
        "o bom desempenho da execução do serviço depende do cumprimento das
        especificações de projeto, do manuseio e da consolidação do elemento
        pré-fabricado aos moldados in loco, de forma a obter-se monolitização
        das ligações especificadas para dar apoio à laje". A adequada
        resistência e durabilidade do elemento estrutural, bem como deformações
        e vibrações conformes, dependem, segundo especialistas, de um projeto
        adequadamente dimensionado e detalhado, um posicionamento de escoras
        compatível com os elementos pré-moldados que estão sendo utilizados e,
        tão importante quanto os anteriores, uma cura cuidadosa do concreto.
      </p>

      <SubTitle>CHECKLIST</SubTitle>
      <p>
        - Há lajes com faixas de pequena largura, incorporando apenas uma linha
        de treliças, e placas mais largas que podem tomar até toda a largura da
        laje projetada.
      </p>

      <p>
        - Existem dois tipos de laje treliçada: aquelas compostas por vigotas
        treliçadas e as compostas por painéis treliçados.
      </p>

      <p>
        - Lajes treliçadas podem ser encontradas em todo território nacional,
        devido à produção das armações treliçadas pelas grandes siderúrgicas. -
        O desempenho das lajes depende de um projeto adequadamente dimensionado
        e detalhado.
      </p>

      <p>
        - No descarregamento deve-se cuidar para que as peças sejam
        transportadas por meio dos pontos de apoio recomendados pelo fabricante.
        Tipologias comuns Painel treliçado com EPS.
      </p>

      <p>
        - Assim como as lajes treliçadas tradicionais, essas pré-lajes permitem
        reduzir a quantidade de pilares e vigas.
      </p>

      <p>
        - Como principal vantagem tem a leveza, em função do uso do EPS,
        utilizado como enchimento e com baixa densidade (cerca de 18 kg/m³). Com
        isso, diminuem-se as cargas da fundação, pilares e vigas de apoio.
      </p>

      <p>
        - Parte inferior contínua, podendo eliminar revestimentos convencionais,
        como chapisco, emboço e reboco.
      </p>

      <p>- Suportam cargas de até 1.000 kgf/m2.</p>

      <p>
        - Principais campos de aplicação: edifícios residenciais, comerciais e
        industriais.
      </p>
    </>
  );
};

export default Product1;
