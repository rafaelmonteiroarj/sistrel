import React from 'react';

import * as S from './styles';

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Footer>
        <S.MenuFooter>
          <S.Item>
            <S.Title>Mapa do Site</S.Title>
            <S.Line />
            <S.Links>
              <S.MenuLinks>
                <S.LinkOption>Home</S.LinkOption>
                <S.LinkOption>Sobre Nós</S.LinkOption>
                <S.LinkOption>Produtos</S.LinkOption>
                <S.LinkOption>Obras Realizadas</S.LinkOption>
                <S.LinkOption>Contato</S.LinkOption>
                <S.LinkOption>Orçamento</S.LinkOption>
              </S.MenuLinks>
            </S.Links>
          </S.Item>

          <S.Item>
            <S.Title>Produtos</S.Title>
            <S.Line />
            <S.Links>
              <S.MenuLinks>
                <S.LinkOption>Pré-Lajes</S.LinkOption>
                <S.LinkOption>Lajes Prontas</S.LinkOption>
                <S.LinkOption>Painel Treliçado 35 cm</S.LinkOption>
                <S.LinkOption>Escadas/Pré-Fabricados</S.LinkOption>
                <S.LinkOption>Escoramentos/Travamento</S.LinkOption>
                <S.LinkOption>Sistema Integrado</S.LinkOption>
                <S.LinkOption>Produção em Canteiro</S.LinkOption>
                <S.LinkOption>Nossos Serviços</S.LinkOption>
              </S.MenuLinks>
            </S.Links>
          </S.Item>

          <S.Item>
            <S.Title>Contato</S.Title>
            <S.Line />
            <S.Links>
              <S.MenuLinks>
                <S.LinkOption>
                  Rua Da Boiada, 75 – Galpão 1 (fundos) <br />
                  Glebas – Franco da Rocha – SP – CEP: 07834-040
                </S.LinkOption>
                <S.LinkOption>Fone: (11) 4446-6163</S.LinkOption>
                <S.LinkOption>Fone: (11) 4446-6562</S.LinkOption>
                <S.LinkOption>Fone: (11) 4498-0400</S.LinkOption>
                <S.LinkOption>Email: comercial@sistrel.com.br</S.LinkOption>
              </S.MenuLinks>
            </S.Links>
            <S.SocialIcons>
              <S.SocialIconsMenu>
                <S.SocialOption>
                  <S.Icon className="fa fa-facebook" />
                </S.SocialOption>
                <S.SocialOption>
                  <S.Icon className="fa fa-linkedin" />
                </S.SocialOption>
                <S.SocialOption>
                  <S.Icon className="fa fa-youtube" />
                </S.SocialOption>
                <S.SocialOption>
                  <S.Icon className="fa fa-whatsapp" />
                </S.SocialOption>
              </S.SocialIconsMenu>
            </S.SocialIcons>
          </S.Item>

          <S.Item>
            <S.Title>Funcionamento</S.Title>
            <S.Line />
            <S.Links>
              <S.MenuLinks>
                <S.LinkOption>Seg à Sex 08:30 às 18:00</S.LinkOption>
                <S.LinkOption>Sábado 09:00 às 14:00</S.LinkOption>
              </S.MenuLinks>
            </S.Links>
          </S.Item>
        </S.MenuFooter>
      </S.Footer>
      <S.FooterCopy>
        Copyright © 2020 | <span>Sistrel Lajes e Pré Fabricados.</span>
      </S.FooterCopy>
    </S.Wrapper>
  );
};

export default Footer;
