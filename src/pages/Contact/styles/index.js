import styled from 'styled-components';
// import media from 'styled-media-query';

export const ContactWrapper = styled.div`
  display: flex;
  padding: 1rem;

  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 460px;
  background-color: red;
`;

export const Information = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  background-color: green;
`;
