import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const LoadingOverlay = ({ title, backgroundColor, color }) => (
  <S.SpinnerWrapper backgroundColor={backgroundColor}>
    <S.SpinContainer>
      <S.Spin color={color} />
      <S.Title color={color}>{title}</S.Title>
    </S.SpinContainer>
  </S.SpinnerWrapper>
);

LoadingOverlay.defaultProps = {
  title: 'Aguarde ...',
  backgroundColor: 'var(--background-option-3)',
  color: 'var(--color4)'
};

LoadingOverlay.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string
};

export default LoadingOverlay;
