import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styles';

const Highlights = ({ title, description }) => {
  return (
    <>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </>
  );
};

Highlights.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Highlights;
