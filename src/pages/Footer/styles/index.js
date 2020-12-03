import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.footer`
  grid-area: footer;
  background-color: var(--color4);
  color: var(--color);
  min-height: 40px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 3rem;
`;

export const MenuFooter = styled.ul`
  display: flex;
  flex-direction: row;
  align-content: stretch;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;

  ${media.lessThan('744px')`
    flex-direction: column;
  `}
`;

export const Item = styled.li``;

export const Title = styled.h5`
  font-family: 'Exo 2', sans-serif;
  text-transform: uppercase;
  font-weight: bold;
`;

export const Line = styled.hr`
  height: 2px;
  border: none;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 32px;
  background: var(--color3);
`;

export const Links = styled.div`
  padding: 0.1rem 0 1rem 0;
`;

export const MenuLinks = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const LinkOption = styled.li`
  font-family: 'Lato';
  font-size: 14px;
  color: var(--color);
  line-height: 32px;
  width: 100%;
`;

export const LinkProduct = styled.a`
  text-decoration: none;
`;

export const SocialIcons = styled.div``;

export const SocialIconsMenu = styled.ul`
  /* width: 60px; */
  display: flex;
  flex-direction: row;
  /* align-items: stretch; */
  justify-content: flex-start;
  padding-bottom: 2rem;
`;

export const SocialOption = styled.li`
  background-color: var(--color2);
  padding: 1rem;
  margin-right: 1rem;
  cursor: pointer;
`;

export const FooterCopy = styled.div`
  background-color: var(--color2);
  padding: 1rem 0;
  font-weight: 600;
  font-size: 14px;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Icon = styled.i``;
