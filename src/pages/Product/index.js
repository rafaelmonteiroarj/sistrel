import React from 'react';

import Single from '../../components/Single';
import Highlights from '../../components/Highlights';

import * as S from './styles';

import Product1 from './Product1';
import Product2 from './Product2';
import Product3 from './Product3';
import Product4 from './Product4';
import Product5 from './Product5';
import Product6 from './Product6';
import Product7 from './Product7';
import Product8 from './Product8';
import Product9 from './Product9';

const Product = ({ match }) => {
  const { params } = match;
  console.log('>>>>>>>', params);

  let title = '';
  let description = '';
  let srcImg = '';
  let altImg = '';
  let information = '';
  const productId = params.id;

  switch (productId) {
    case '1':
      title = 'Vigota com Lajotas Cerâmicas';
      description =
        'Sistema composto por vigotas treliçadas e elementos de enchimento (cerâmica e ou EPS) que se adapta em diversos tipos de estrutura. Com aplicação fácil e econômica, permitem um alívio no peso próprio e  menor consumo de concreto, reduz também a utilização de escoramentos e formas. Podem ser dimensionadas de foma UNIdirecional ou BIdirecional.';
      srcImg = '/images/product1.jpg';
      altImg = 'Vigota com Lajotas Cerâmicas';
      information = <Product1 />;
      break;
    case '2':
      title = 'Vigota com EPS';
      description = '';
      srcImg = '/images/product2.jpg';
      altImg = 'Vigota com EPS';
      information = <Product2 />;
      break;
    case '3':
      title = 'Vigota com Cordoalhas Engraxadas';
      description = '';
      srcImg = '/images/product3.jpg';
      altImg = 'Vigota com Cordoalhas Engraxadas';
      information = <Product3 />;
      break;
    case '4':
      title = 'Painel Treliçado BW25 / 30';
      description = '';
      srcImg = '/images/product4.jpg';
      altImg = 'Painel Treliçado BW25 / 30';
      information = <Product4 />;
      break;
    case '5':
      title = 'Painel Treliçado BW125';
      description = '';
      srcImg = '/images/product5.jpg';
      altImg = 'Painel Treliçado BW125';
      information = <Product5 />;
      break;
    case '6':
      title = 'Painel Treliçado BW240/280';
      description = '';
      srcImg = '/images/product6.jpg';
      altImg = 'Painel Treliçado BW240/280';
      information = <Product6 />;
      break;
    case '7':
      title = 'Cortina de Contenção';
      description = '';
      srcImg = '/images/product7.jpg';
      altImg = 'Cortina de Contenção';
      information = <Product7 />;
      break;
    case '8':
      title = 'Protensão';
      description = '';
      srcImg = '/images/product8.jpg';
      altImg = 'Protensão';
      information = <Product8 />;
      break;
    case '9':
      title = 'Laje Alveolar';
      description = '';
      srcImg = '/images/product9.jpg';
      altImg = 'Laje Alveolar';
      information = <Product9 />;
      break;
    default:
      title = 'Vigota com Lajotas Cerâmicas';
      description =
        'Sistema composto por vigotas treliçadas e elementos de enchimento (cerâmica e ou EPS) que se adapta em diversos tipos de estrutura. Com aplicação fácil e econômica, permitem um alívio no peso próprio e  menor consumo de concreto, reduz também a utilização de escoramentos e formas. Podem ser dimensionadas de foma UNIdirecional ou BIdirecional.';
      srcImg = '/images/product1.jpg';
      altImg = 'Vigota com Lajotas Cerâmicas';
      information = <Product1 />;
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
          <p>{description}</p>
        </S.Information>

        <S.ImageWrapper>
          <S.Image src={srcImg} alt={altImg} />
        </S.ImageWrapper>

        <S.Information>{information}</S.Information>
      </Single>
    </>
  );
};

export default Product;
