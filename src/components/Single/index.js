import React, { useCallback, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

import Header from '../../pages/Header';
import Section from '../../pages/Section';
import Button from '../UI/Button';
import Footer from '../../pages/Footer';
import { AppContext } from '../../lib/Context';

import * as S from './styles';

const Single = ({ children, sectionEnabled }) => {
  const { menu } = useContext(AppContext);
  const [backToTop, setBackToTop] = useState(false);

  const scroll = useCallback(() => {
    setBackToTop(window.pageYOffset > 60);
  }, [setBackToTop]);

  useEffect(() => window.addEventListener('scroll', () => scroll()), [scroll]);

  const { active } = menu;

  return (
    <>
      <S.Container menuActive={active}>
        <Header />
        <Section sectionEnabled={sectionEnabled} />
        <S.Main>{children}</S.Main>
        <S.Orcamento className="orcamento">
          <S.Title>ATENDEMOS TODO O BRASIL</S.Title>
          <Button type="submit" kind="danger" size="large">
            SOLICITE UM ORÇAMENTO
          </Button>
        </S.Orcamento>
        <Footer />
        <S.BackToTop
          className="backTop"
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
