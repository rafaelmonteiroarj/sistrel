import React, { useContext, useCallback, useState, useEffect } from 'react';

import { AppContext } from '../../lib/Context';

import * as S from './styles';

const Header = () => {
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
        <S.Logo src="/images/logo.png" />
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
            <S.Link className="active" href="#">
              Home
            </S.Link>
          </S.Item>
          <S.Item>
            <S.Link href="#">Sobre Nós</S.Link>
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
                <S.LinkSub href="#">Pré-Lajes</S.LinkSub>
              </S.SubItem>
              <S.SubItem>
                <S.LinkSub href="#">Lajes Prontas</S.LinkSub>
              </S.SubItem>
              <S.SubItem>
                <S.LinkSub href="#">Painel Treliçado 35 cm</S.LinkSub>
              </S.SubItem>
              <S.SubItem>
                <S.LinkSub href="#">Escadas/Pré-Fabricados</S.LinkSub>
              </S.SubItem>
              <S.SubItem>
                <S.LinkSub href="#">Escoramentos/Travamento</S.LinkSub>
              </S.SubItem>
              <S.SubItem>
                <S.LinkSub href="#">Sistema Integrado</S.LinkSub>
              </S.SubItem>
              <S.SubItem>
                <S.LinkSub href="#">Produção em Canteiro</S.LinkSub>
              </S.SubItem>
              <S.SubItem>
                <S.LinkSub href="#">Nossos Serviços</S.LinkSub>
              </S.SubItem>
            </S.MenuSubItens>
          </S.Sub>
          <S.Item>
            <S.Link href="#">Obras Realizadas</S.Link>
          </S.Item>
          <S.Item>
            <S.Link href="#">Contato</S.Link>
          </S.Item>
          <S.Item>
            <S.Link href="#">Orçamento</S.Link>
          </S.Item>
        </S.Menu>
      </S.NavWrapper>
    </S.Wrapper>
  );
};

export default Header;
