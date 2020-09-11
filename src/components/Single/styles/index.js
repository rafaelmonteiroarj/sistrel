import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto auto 1fr auto auto;
  grid-template-areas:
    'header header header'
    'gallery gallery gallery'
    'main main main'
    'orcamento orcamento orcamento'
    'footer footer footer';
  grid-template-columns: 100%;

  ${(props) =>
    props.menuActive === true &&
    `
      section, main, footer, .backTop, .orcamento {
        display:none;
      }
  `}
`;

export const Main = styled.main`
  grid-area: main;
  color: #444;
  padding: 2rem;

  p {
    padding: 0px 0px 10px 10px;
  }
`;

export const BackToTop = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  height: 50px;
  width: 50px;
  color: #fff;
  background: #333333;
  border: none;
  border-radius: 50vh;
  display: ${(props) => (props.backToTop === true ? `block` : `none`)};
  outline-style: none;
  cursor: pointer;
`;

export const Orcamento = styled.div`
  grid-area: orcamento;
  background-color: var(--color2);
  height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-weight: bold;
  color: #ffffff;
  font-size: 1rem;
  padding-bottom: 1rem;
`;

export const Icon = styled.i``;
