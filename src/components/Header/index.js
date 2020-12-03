import 'dotenv/config';
import React, { useContext, useCallback, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { AppContext } from '../../lib/Context';

import * as S from './styles';

const Header = () => {
  const { pathname } = useLocation();

  const [intFrameWidth, setIntFrameWidth] = useState(
    window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
  );

  const { menu, setContext } = useContext(AppContext);

  const resize = useCallback(() => {
    setIntFrameWidth(
      window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    );
  }, [setIntFrameWidth]);

  useEffect(() => window.addEventListener('resize', () => resize()), [resize]);

  const { productsActive, active } = menu;

  return (
    <S.Wrapper>
      <S.MenuLogo>
        <S.LinkLogo href="/">
          <S.Logo src="/images/logo.png" />
        </S.LinkLogo>
        <S.MenuToggle
          onClick={() => setContext({ menu: { ...menu, active: !active } })}
        >
          <S.One active={active} />
          <S.Two active={active} />
          <S.Three active={active} />
        </S.MenuToggle>
      </S.MenuLogo>
      <S.NavWrapper active={active}>
        <S.Menu>
          <S.Item>
            <S.Link
              menuSelected={pathname === '/'}
              href={process.env.REACT_APP_HOME}
            >
              Home
            </S.Link>
          </S.Item>
          <S.Item>
            <S.Link
              menuSelected={pathname === '/about'}
              href={process.env.REACT_APP_ABOUT}
            >
              Sobre Nós
            </S.Link>
          </S.Item>

          <S.Sub
            onMouseOver={() => {
              if (intFrameWidth > 1210) {
                setContext({
                  menu: { ...menu, productsActive: !productsActive }
                });
              }
            }}
            onMouseOut={() => {
              if (intFrameWidth > 1210) {
                setContext({
                  menu: { ...menu, productsActive: !productsActive }
                });
              }
            }}
            onClick={() => {
              if (intFrameWidth <= 1210) {
                setContext({
                  menu: { ...menu, productsActive: !productsActive }
                });
              }
            }}
          >
            <S.MenuSub>
              <S.Link href="#">Produtos</S.Link>
              <S.Accordion
                className="feather-corner-right-down"
                productsActive={!productsActive}
              />
              <S.Accordion
                className="feather-corner-right-up"
                productsActive={productsActive}
              />
            </S.MenuSub>
            <S.MenuSubItens productsActive={productsActive}>
              <S.SubItem>
                <S.LinkSub href="/product/1">
                  Vigota com Lajotas Cerâmicas
                </S.LinkSub>
              </S.SubItem>
              <S.SubItem>
                <S.LinkSub href="/product/2">Vigota com EPS</S.LinkSub>
              </S.SubItem>
              <S.SubItem>
                <S.LinkSub href="/product/3">
                  Vigota com Cordoalhas Engraxadas
                </S.LinkSub>
              </S.SubItem>
              <S.SubItem>
                <S.LinkSub href="/product/4">
                  Painel Treliçado BW25 / 30
                </S.LinkSub>
              </S.SubItem>
              <S.SubItem>
                <S.LinkSub href="/product/5">Painel Treliçado BW125</S.LinkSub>
              </S.SubItem>
              <S.SubItem>
                <S.LinkSub href="/product/6">
                  Painel Treliçado BW240/280
                </S.LinkSub>
              </S.SubItem>
              <S.SubItem>
                <S.LinkSub href="/product/7">Cortina de Contenção</S.LinkSub>
              </S.SubItem>
              <S.SubItem>
                <S.LinkSub href="/product/8">Protensão</S.LinkSub>
              </S.SubItem>
              <S.SubItem>
                <S.LinkSub href="/product/9">Laje Alveolar</S.LinkSub>
              </S.SubItem>
            </S.MenuSubItens>
          </S.Sub>
          <S.Item>
            <S.Link
              menuSelected={pathname === '/works'}
              href={process.env.REACT_APP_WORKS}
            >
              Obras Realizadas
            </S.Link>
          </S.Item>
          <S.Item>
            <S.Link
              menuSelected={pathname === '/contact'}
              href={process.env.REACT_APP_CONTACT}
            >
              Contato
            </S.Link>
          </S.Item>
          <S.Item>
            <S.Link
              menuSelected={pathname === '/budget'}
              href={process.env.REACT_APP_BUDGET}
            >
              Orçamento
            </S.Link>
          </S.Item>
          <S.Item>
            <S.Link
              menuSelected={pathname === '/provider'}
              href={process.env.REACT_APP_PROVIDER}
            >
              Seja um Parceiro/Fornecedor
            </S.Link>
          </S.Item>
        </S.Menu>
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default Header;
