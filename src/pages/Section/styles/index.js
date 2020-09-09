import styled from 'styled-components';

export const Wrapper = styled.section`
  grid-area: gallery;

  height: 400px;
  color: #ffffff;
  background-color: black;

  display: ${(props) => (props.sectionEnabled === true ? 'block' : 'none')};
`;

export const Image = styled.img`
  height: 400px;
`;

export const Button = styled.button``;
