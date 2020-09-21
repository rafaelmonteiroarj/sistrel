import React from 'react';

import Single from '../../components/Single';
import Highlights from '../../components/Highlights';

import * as S from './styles';

const Work = () => {
  return (
    <>
      <Single sectionEnabled={false}>
        <Highlights
          title="OBRAS REALIZADAS COM PRODUTOS SISTREL"
          description="A qualidade certa, para obra cera ! Essas são algumas das grandes obras realizadas com produtos Sistrel."
        />

        <S.WorkWrapper>
          <S.Works>
            <S.WorkItem>
              <S.Image src="/images/work1.jpg" />
              <S.Information>
                <S.Title>TROPICAL PONTA NEGRA</S.Title>
                <S.Description>Obra realizada com lajes Sistrel.</S.Description>
              </S.Information>
            </S.WorkItem>

            <S.WorkItem>
              <S.Image src="/images/work2.jpg" />
              <S.Information>
                <S.Title>URBAN LOFT MORUMBI</S.Title>
                <S.Description>Obra realizada com lajes Sistrel.</S.Description>
              </S.Information>
            </S.WorkItem>

            <S.WorkItem>
              <S.Image src="/images/work3.jpg" />
              <S.Information>
                <S.Title>ATENAS INDAIATUBA</S.Title>
                <S.Description>Obra realizada com lajes Sistrel.</S.Description>
              </S.Information>
            </S.WorkItem>

            <S.WorkItem>
              <S.Image src="/images/work4.jpg" />
              <S.Information>
                <S.Title>LEPE INTERLAGOS</S.Title>
                <S.Description>Obra realizada com lajes Sistrel.</S.Description>
              </S.Information>
            </S.WorkItem>

            <S.WorkItem>
              <S.Image src="/images/work5.jpg" />
              <S.Information>
                <S.Title>TRINIDAD & TOBAGO</S.Title>
                <S.Description>Obra realizada com lajes Sistrel.</S.Description>
              </S.Information>
            </S.WorkItem>

            <S.WorkItem>
              <S.Image src="/images/work6.jpg" />
              <S.Information>
                <S.Title>HIRAN MONTEIRO</S.Title>
                <S.Description>Obra realizada com lajes Sistrel.</S.Description>
              </S.Information>
            </S.WorkItem>

            <S.WorkItem>
              <S.Image src="/images/work7.jpg" />
              <S.Information>
                <S.Title>TERRAÇO TAMBORE</S.Title>
                <S.Description>Obra realizada com lajes Sistrel.</S.Description>
              </S.Information>
            </S.WorkItem>

            <S.WorkItem>
              <S.Image src="/images/work8.jpg" />
              <S.Information>
                <S.Title>MORUMBI LIFE</S.Title>
                <S.Description>Obra realizada com lajes Sistrel.</S.Description>
              </S.Information>
            </S.WorkItem>
          </S.Works>
        </S.WorkWrapper>
      </Single>
    </>
  );
};

export default Work;
