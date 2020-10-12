import React from 'react';

import * as S from './styles';

const Map = () => {
  return (
    <>
      <S.IframeWrapper>
        <S.Iframe
          title="Sistrel Lajes"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.6659847111177!2d-46.82444628461867!3d-23.32787468479923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee1fc03ddc22f%3A0x4ce4539737bd93ae!2sSistrel%20Lajes!5e0!3m2!1spt-BR!2sbr!4v1601057768531!5m2!1spt-BR!2sbr"
          allowFullScreen
        />
      </S.IframeWrapper>
    </>
  );
};

export default Map;
