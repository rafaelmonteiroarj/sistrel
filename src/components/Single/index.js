import React, { useCallback, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Header from '../Header';
import Section from '../Section';
import Button from '../UI/Button';
import Footer from '../../pages/Footer';
import { AppContext } from '../../lib/Context';

import * as S from './styles';

const Single = ({ children, sectionEnabled, orcamentoEnabled }) => {
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
        <S.Orcamento orcamentoEnabled={orcamentoEnabled} className="orcamento">
          <S.Title>ATENDEMOS TODO O BRASIL</S.Title>
          <Link to="/budget">
            <Button type="submit" kind="danger" size="large">
              SOLICITE UM ORÇAMENTO
            </Button>
          </Link>
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
  sectionEnabled: true,
  orcamentoEnabled: true
};

Single.propTypes = {
  children: PropTypes.node.isRequired,
  sectionEnabled: PropTypes.bool,
  orcamentoEnabled: PropTypes.bool
};

export default Single;
