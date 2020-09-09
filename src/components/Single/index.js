import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Header from '../../pages/Header';
import Section from '../../pages/Section';
import Footer from '../../pages/Footer';

import Button from '../UI/Button';

import * as S from './styles';

const Single = ({ children, sectionEnabled }) => {
  const [backToTop, setBackToTop] = useState(false);

  const scroll = useCallback(() => {
    setBackToTop(window.pageYOffset > 60);
  }, [setBackToTop]);

  useEffect(() => window.addEventListener('scroll', () => scroll()), [scroll]);

  return (
    <>
      <S.Container>
        <Header />
        <Section sectionEnabled={sectionEnabled} />
        <S.Main>{children}</S.Main>
        <S.Orcamento>
          <S.Title>ATENDEMOS TODO O BRASIL</S.Title>
          <Button type="submit" kind="danger" size="large">
            SOLICITE UM ORÇAMENTO
          </Button>
        </S.Orcamento>
        <Footer />
        <S.BackToTop
          backToTop={backToTop}
          onClick={() => {
            document.documentElement.scrollTop = 0;
          }}
        >
          <S.Icon className="feather-corner-right-up" />
        </S.BackToTop>
      </S.Container>
    </>
  );
};

Single.defaultProps = {
  sectionEnabled: true
};

Single.propTypes = {
  children: PropTypes.node.isRequired,
  sectionEnabled: PropTypes.bool
};

export default Single;
