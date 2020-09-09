import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import * as S from './styles';

const Section = ({ sectionEnabled }) => {
  return (
    <S.Wrapper sectionEnabled={sectionEnabled}>
      <Carousel
        autoPlay={500}
        showStatus={false}
        showThumbs={false}
        useKeyboardArrows
        emulateTouch
        swipeable
        infiniteLoop
        renderArrowPrev={(clickHandler, hasPrev) =>
          hasPrev && (
            <S.Button
              className="control-arrow control-prev"
              onClick={clickHandler}
            >
              <i className="feather-corner-up-left" />
            </S.Button>
          )
        }
        renderArrowNext={(clickHandler, hasNext) =>
          hasNext && (
            <S.Button
              className="control-arrow control-next"
              onClick={clickHandler}
            >
              <i className="feather-corner-up-right" />
            </S.Button>
          )
        }
      >
        <S.Image src="images/alveolar.jpg" alt="Laje Alveolar" />
        <S.Image src="images/bw25-30.jpg" alt="Painel bw25-30" />
        <S.Image src="images/bw125.jpg" alt="Painel bw 125" />
        <S.Image src="images/bw280.jpg" alt="Painel bw 280" />
        <S.Image src="images/ceramica.jpg" alt="Laje ceramica" />
        <S.Image src="images/cortina.jpg" alt="Laje cortina" />
        <S.Image src="images/eps.jpg" alt="Laje eps" />
        <S.Image src="images/protencao.jpg" alt="Laje protencao" />
      </Carousel>
    </S.Wrapper>
  );
};

export default Section;
