import 'dotenv/config';
import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link to={process.env.REACT_APP_HOME}>
                  <S.LinkOption>Home</S.LinkOption>
                </Link>
                <Link to={process.env.REACT_APP_ABOUT}>
                  <S.LinkOption>Sobre Nós</S.LinkOption>
                </Link>
                <Link to={process.env.REACT_APP_PRODUCT}>
                  <S.LinkOption>Produtos</S.LinkOption>
                </Link>
                <Link to={process.env.REACT_APP_WORKS}>
                  <S.LinkOption>Obras Realizadas</S.LinkOption>
                </Link>
                <Link to={process.env.REACT_APP_CONTACT}>
                  <S.LinkOption>Contato</S.LinkOption>
                </Link>
                <Link to={process.env.REACT_APP_BUDGET}>
                  <S.LinkOption>Orçamento</S.LinkOption>
                </Link>
                <Link to={process.env.REACT_APP_PROVIDER}>
                  <S.LinkOption>Quero Ser Fornecedor</S.LinkOption>
                </Link>
              </S.MenuLinks>
            </S.Links>
          </S.Item>

          <S.Item>
            <S.Title>Produtos</S.Title>
            <S.Line />
            <S.Links>
              <S.MenuLinks>
                <S.LinkOption>
                  <S.LinkProduct href="/product/1">
                    Vigota com Lajotas Cerâmicas
                  </S.LinkProduct>
                </S.LinkOption>
                <S.LinkOption>
                  <S.LinkProduct href="/product/2">
                    Vigota com EPS
                  </S.LinkProduct>
                </S.LinkOption>
                <S.LinkOption>
                  <S.LinkProduct href="/product/3">
                    Vigota com Cordoalhas Engraxadas
                  </S.LinkProduct>
                </S.LinkOption>
                <S.LinkOption>
                  <S.LinkProduct href="/product/4">
                    Painel Treliçado BW25 / 30
                  </S.LinkProduct>
                </S.LinkOption>
                <S.LinkOption>
                  <S.LinkProduct href="/product/5">
                    Painel Treliçado BW125
                  </S.LinkProduct>
                </S.LinkOption>
                <S.LinkOption>
                  <S.LinkProduct href="/product/6">
                    Painel Treliçado BW240/280
                  </S.LinkProduct>
                </S.LinkOption>
                <S.LinkOption>
                  <S.LinkProduct href="/product/7">
                    Cortina de Contenção
                  </S.LinkProduct>
                </S.LinkOption>
                <S.LinkOption>
                  <S.LinkProduct href="/product/8">Protensão</S.LinkProduct>
                </S.LinkOption>
                <S.LinkOption>
                  <S.LinkProduct href="/product/9">Laje Alveolar</S.LinkProduct>
                </S.LinkOption>
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
                <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>
                  <S.LinkOption>Email: comercial@sistrel.com.br</S.LinkOption>
                </a>
              </S.MenuLinks>
            </S.Links>
            <S.SocialIcons>
              <S.SocialIconsMenu>
                <Link
                  to={{ pathname: process.env.REACT_APP_FACEBOOK }}
                  target="_blank"
                >
                  <S.SocialOption>
                    <S.Icon className="fa fa-facebook" />
                  </S.SocialOption>
                </Link>
                <Link
                  to={{ pathname: process.env.REACT_APP_LINKEDIN }}
                  target="_blank"
                >
                  <S.SocialOption>
                    <S.Icon className="fa fa-linkedin" />
                  </S.SocialOption>
                </Link>
                <Link
                  to={{ pathname: process.env.REACT_APP_YOUTUBE }}
                  target="_blank"
                >
                  <S.SocialOption>
                    <S.Icon className="fa fa-youtube" />
                  </S.SocialOption>
                </Link>

                <S.SocialOption>
                  <a
                    href="https://api.whatsapp.com/send?phone=5511999375327&text=Olá,%20meu%20amigo!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <S.Icon className="fa fa-whatsapp" />
                  </a>
                </S.SocialOption>
              </S.SocialIconsMenu>
            </S.SocialIcons>
          </S.Item>

          <S.Item>
            <S.Title>Funcionamento</S.Title>
            <S.Line />
            <S.Links>
              <S.MenuLinks>
                <S.LinkOption>Seg à Sex 07:00 às 17:00</S.LinkOption>
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
