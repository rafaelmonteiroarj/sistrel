import React from 'react';

import * as S from './styles';

const Specialty = () => {
  return (
    <>
      <S.Title>ESPECIALIZADOS EM</S.Title>
      <S.SpecialtyWrapper>
        <S.SpecialtyItem>
          <S.Image src="images/viga-ceramica.jpg" />
          <S.Desc>LAJES</S.Desc>
        </S.SpecialtyItem>
        <S.SpecialtyItem>
          <S.Image src="images/painel.jpg" />
          <S.Desc>PAINEIS</S.Desc>
        </S.SpecialtyItem>
        <S.SpecialtyItem>
          <S.Image src="images/protencao-home.jpg" />
          <S.Desc>PROTENSÂO</S.Desc>
        </S.SpecialtyItem>

        <S.SpecialtyItem>
          <S.Image src="images/cortina-especialidade.jpg" />
          <S.Desc>CORTINA</S.Desc>
        </S.SpecialtyItem>

        <S.SpecialtyItem>
          <S.Image src="images/painel-bw-280-especialidade.jpg" />
          <S.Desc>PRE MOLDADO</S.Desc>
        </S.SpecialtyItem>

        <S.SpecialtyItem>
          <S.Image src="images/alveolar-especialidade.jpg" />
          <S.Desc>ALVEOLAR</S.Desc>
        </S.SpecialtyItem>
      </S.SpecialtyWrapper>
    </>
  );
};

export default Specialty;
