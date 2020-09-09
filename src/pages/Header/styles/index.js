import styled from 'styled-components';

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  grid-area: header;
  max-width: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  background-color: var(--background);
  z-index: 1;
`;

export const Logo = styled.img`
  width: 200px;
`;

export const MenuToggle = styled.div`
  height: 40px;
  width: 40px;
  padding: 10px;
  cursor: pointer;
  display: none;
  transition-duration: 0.4s;
`;

export const One = styled.div`
  background-color: var(--color4);
  height: 6px;
  width: 100%;
  margin: 6px auto;

  transition-duration: 0.3s;
`;

export const Two = styled.div`
  background-color: var(--color4);
  height: 6px;
  width: 100%;
  margin: 6px auto;

  transition-duration: 0.3s;
`;

export const Three = styled.div`
  background-color: var(--color4);
  height: 6px;
  width: 100%;
  margin: 6px auto;

  transition-duration: 0.3s;
`;

export const NavWrapper = styled.nav``;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const Item = styled.li`
  padding: 0 1em;
  position: relative;
  color: var(--color4);
  font-size: 16px;
  cursor: pointer;
  letter-spacing: 0.1rem;
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

  &.active {
    &:before {
      opacity: 1;
      width: 100%;
    }
  }
`;

export const MenuSub = styled.div``;

export const Accordion = styled.div``;

export const MenuSubItens = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: var(--color4);
  position: absolute;
  min-width: 200px;
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
`;

export const SubItem = styled.li`
  padding: 1rem;
  border-bottom: 1px solid var(--color2);

  &:hover {
    background-color: var(--color3);
  }
`;

export const LinkSub = styled.a`
  color: var(--color);
  text-decoration: none;
`;
