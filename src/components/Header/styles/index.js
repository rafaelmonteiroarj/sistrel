import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  grid-area: header;
  max-width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  background-color: var(--background);
  z-index: 30;

  ${media.lessThan('1350px')`
    flex-direction: column;
  `}
`;

export const MenuLogo = styled.div`
  padding: 2rem;

  ${media.lessThan('1350px')`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `}
`;

export const LinkLogo = styled.a``;

export const Logo = styled.img`
  width: 200px;

  ${media.lessThan('1350px')`
    width: 180px;
  `}

  ${media.lessThan('768px')`
    width: 140px;
  `}

  ${media.lessThan('425px')`
    width: 120px;
  `}
`;

export const MenuToggle = styled.div`
  height: 40px;
  width: 40px;
  cursor: pointer;
  display: none;
  transition-duration: 0.4s;
  margin-top: -5px;

  ${media.lessThan('1350px')`
    display:  block;
  `}
`;

export const One = styled.div`
  background-color: var(--color4);
  height: 6px;
  width: 100%;
  margin: 6px auto;
  transition-duration: 0.3s;

  ${(props) =>
    props.active === true &&
    `
      transform: rotate(-45deg) translate(-9px, 6px);
    `}
`;

export const Two = styled.div`
  background-color: var(--color4);
  height: 6px;
  width: 100%;
  margin: 6px auto;
  transition-duration: 0.3s;

  ${(props) =>
    props.active === true &&
    `
      opacity: 0;
    `}
`;

export const Three = styled.div`
  background-color: var(--color4);
  height: 6px;
  width: 100%;
  margin: 6px auto;
  transition-duration: 0.3s;

  ${(props) =>
    props.active === true &&
    `
      transform: rotate(45deg) translate(-11px, -8px);
    `}
`;

export const NavWrapper = styled.nav`
  ${media.lessThan('1350px')`
    width: 100%;
    transition: height 0.5s;
    overflow: hidden;
    height: 0;

    ${(props) =>
      props.active === true &&
      `
      width: 100%;
      transition: height 0.5s;
      /* overflow: hidden; */
      height: auto;
    `}
  `}
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;

  ${media.lessThan('1350px')`
    min-height: 100vh;
    width: 100vw;
    height: auto;
    flex-direction: column;
    background-color: var(--color4);
  `}
`;

export const Item = styled.li`
  padding: 0 1em;
  position: relative;
  color: var(--color4);
  font-size: 16px;
  cursor: pointer;
  letter-spacing: 0.1rem;

  ${media.lessThan('1350px')`
    all: initial;
    padding: 30px;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    cursor: pointer;
  `}
`;

export const Link = styled.a`
  padding: 0.2rem;
  color: var(--color4);
  position: relative;
  text-decoration: none;

  &:before {
    position: absolute;
    transition: all 0.35s ease;
    bottom: 0;
    display: block;
    height: 2px;
    opacity: 0;
    width: 0;
    content: '';
    background-color: #0c0c0c;
  }

  &:hover {
    &:before {
      opacity: 1;
      width: 100%;
    }
  }

  ${(props) =>
    props.menuSelected === true &&
    `
    &:before {
      opacity: 1;
      width: 100%;
    }
  `}

  ${media.lessThan('1350px')`
    color: var(--color);
    text-decoration: none;

    display: flex;
  `}
`;

export const Sub = styled.li`
  padding: 0 1em;
  position: relative;
  color: var(--color4);
  font-size: 16px;
  cursor: pointer;
  letter-spacing: 0.1rem;

  ${media.lessThan('1350px')`
    all: initial;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    cursor: pointer;

    display: flex;
    flex-direction: column;
  `}
`;

export const MenuSub = styled.div`
  ${media.lessThan('1350px')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
  `}
`;

export const Accordion = styled.i`
  color: #ffffff;
  font-weight: bold;
  display: none;

  ${media.lessThan('1350px')`
    display: ${(props) => (props.productsActive === true ? `block` : `none`)};
  `}
`;

export const MenuSubItens = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: var(--color4);
  position: absolute;
  min-width: 360px;
  margin: 1.4rem 0 0 -3rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  transition: max-height 0.5s;
  overflow: hidden;
  max-height: 0;

  ${(props) =>
    props.productsActive === true &&
    `
    max-height: 100vh;
  `}

  ${media.lessThan('1350px')`
    all: initial;
    display: flex;
    flex-direction: column;
    transition: max-height 0.5s;
    overflow: hidden;
    max-height: 0;

    ${(props) =>
      props.productsActive === true &&
      `
        max-height: 900px;
      `}
  `}
`;

export const SubItem = styled.li`
  padding: 1rem;
  border-bottom: 1px solid var(--color2);

  &:hover {
    background-color: var(--color3);
  }

  ${media.lessThan('1350px')`
    all: initial;
    padding: 25px;
    cursor: pointer;
    font-weight: 600;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    background-color: var(--color2);
  `}
`;

export const LinkSub = styled.a`
  color: var(--color);
  text-decoration: none;
  display: block;

  ${media.lessThan('1350px')`
    padding: 1rem;
    color: var(--color);
    position: relative;
    text-decoration: none;
  `}
`;
