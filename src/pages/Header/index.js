import React, { useContext } from 'react';

import { AppContext } from '../../lib/Context';

import * as S from './styles';

const Header = () => {
  const { menu, setContext } = useContext(AppContext);

  const { productsActive } = menu;

  return (
    <S.Wrapper>
      <S.Logo src="/images/logo.png" />
      <S.MenuToggle>
        <S.One />
        <S.Two />
        <S.Three />
      </S.MenuToggle>
      <S.NavWrapper>
        <S.Menu>
          <S.Item>
            <S.Link className="active" href="#">
              Home
            </S.Link>
          </S.Item>
          <S.Item>
            <S.Link href="#">Sobre Nós</S.Link>
          </S.Item>
          <S.Item
            onMouseOver={() =>
              setContext({ menu: { productsActive: !productsActive } })
            }
            onMouseOut={() =>
              setContext({ menu: { productsActive: !productsActive } })
            }
          >
            <S.MenuSub>
              <S.Link href="#">Produtos</S.Link>
              <S.Accordion />
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
          </S.Item>
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
