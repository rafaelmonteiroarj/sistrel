import React from 'react';
import ReactPlayer from 'react-player';

import * as S from './styles';

const Player = () => {
  return (
    <S.PlayerWrapper>
      <ReactPlayer
        url="https://youtu.be/xkM9Nb007Rg"
        playing={false}
        loop={false}
        width="100%"
        height="300px"
      />
    </S.PlayerWrapper>
  );
};

export default Player;
