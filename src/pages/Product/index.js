import React from 'react';

import Single from '../../components/Single';
import Highlights from '../../components/Highlights';

import * as S from './styles';

const Product = ({ match }) => {
  const { params } = match;
  console.log('>>>>>>>', params);

  let title = '';

  switch (params.id) {
    case '1':
      title = 'Pré-Lajes';
      break;
    case '2':
      title = 'Lajes Prontas';
      break;
    case '3':
      title = 'Painel Treliçado 35 cm';
      break;
    case '4':
      title = 'Escadas/Pré-Fabricados';
      break;
    case '5':
      title = 'Escoramentos/Travamento';
      break;
    case '6':
      title = 'Sistema Integrado';
      break;
    case '7':
      title = 'Produção em Canteiro';
      break;
    case '8':
      title = 'Nossos Serviços';
      break;
    default:
      title = 'In development ....';
      break;
  }

  return (
    <>
      <Single sectionEnabled={false}>
        <Highlights
          title={title}
          description="Desenvolvidas com tecnologia na medida certa, os produtos destacam-se pelo excelente custo benefício."
        />
        <S.Information>
          <p>
            Lorem ipsum phasellus dictumst integer purus himenaeos conubia
            pharetra fringilla tellus, in porta himenaeos volutpat gravida
            lobortis augue consectetur cubilia ante, ligula egestas eros
            dictumst curae vulputate morbi ullamcorper vulputate. nulla lorem eu
            leo curae hac purus aliquam praesent amet, suspendisse conubia at
            consequat orci curabitur porta est scelerisque, orci nullam
            consequat posuere praesent fermentum nulla posuere. velit consequat
            commodo feugiat convallis integer torquent lacus pulvinar interdum
            urna, varius quam bibendum congue tincidunt habitant libero urna
            inceptos, habitasse risus mauris sem fusce quam velit nunc tortor.
            sociosqu amet integer sed et taciti viverra commodo rutrum augue
            ornare est, aenean orci dapibus iaculis nunc amet eu neque malesuada
            blandit, arcu nisl nibh lobortis cubilia tortor aptent nunc commodo
            donec.
          </p>
        </S.Information>

        <S.ImageWrapper>
          {/* <S.Image src="images/bw25-30.jpg" alt="Painel bw25-30" /> */}
          <S.ImageExample>Responsive image</S.ImageExample>
        </S.ImageWrapper>

        <Highlights
          title="Dados Técnicos"
          description="Economia e segurança para sua obra..."
        />
        <S.Information>
          <p>
            Lorem ipsum phasellus dictumst integer purus himenaeos conubia
            pharetra fringilla tellus, in porta himenaeos volutpat gravida
            lobortis augue consectetur cubilia ante, ligula egestas eros
            dictumst curae vulputate morbi ullamcorper vulputate. nulla lorem eu
            leo curae hac purus aliquam praesent amet, suspendisse conubia at
            consequat orci curabitur porta est scelerisque, orci nullam
            consequat posuere praesent fermentum nulla posuere.
          </p>
        </S.Information>
      </Single>
    </>
  );
};

export default Product;
