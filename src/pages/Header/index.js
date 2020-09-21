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
            <S.Link menuSelected={pathname === '/'} href="/">
              Home
            </S.Link>
          </S.Item>
          <S.Item>
            <S.Link menuSelected={pathname === '/about'} href="/about">
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
                <S.LinkSub href="/product/1">Pré-Lajes</S.LinkSub>
              </S.SubItem>
              <S.SubItem>
                <S.LinkSub href="/product/2">Lajes Prontas</S.LinkSub>
              </S.SubItem>
              <S.SubItem>
                <S.LinkSub href="/product/3">Painel Treliçado 35 cm</S.LinkSub>
              </S.SubItem>
              <S.SubItem>
                <S.LinkSub href="/product/4">Escadas/Pré-Fabricados</S.LinkSub>
              </S.SubItem>
              <S.SubItem>
                <S.LinkSub href="/product/5">Escoramentos/Travamento</S.LinkSub>
              </S.SubItem>
              <S.SubItem>
                <S.LinkSub href="/product/6">Sistema Integrado</S.LinkSub>
              </S.SubItem>
              <S.SubItem>
                <S.LinkSub href="/product/7">Produção em Canteiro</S.LinkSub>
              </S.SubItem>
              <S.SubItem>
                <S.LinkSub href="/product/8">Nossos Serviços</S.LinkSub>
              </S.SubItem>
            </S.MenuSubItens>
          </S.Sub>
          <S.Item>
            <S.Link menuSelected={pathname === '/works'} href="/works">
              Obras Realizadas
            </S.Link>
          </S.Item>
          <S.Item>
            <S.Link menuSelected={pathname === '/contact'} href="/contact">
              Contato
            </S.Link>
          </S.Item>
          <S.Item>
            <S.Link href="#">Orçamento</S.Link>
          </S.Item>
          <S.Item>
            <S.Link href="#">Seja um Parceiro/Fornecedor</S.Link>
          </S.Item>
        </S.Menu>
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default Header;
