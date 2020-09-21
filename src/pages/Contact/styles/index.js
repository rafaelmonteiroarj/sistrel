import styled from 'styled-components';
import media from 'styled-media-query';

export const ContactWrapper = styled.div`
  display: flex;
  padding: 1rem;

  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  ${media.lessThan('1024px')`
    margin-left: 0;
    margin-right: 0;
  `}

  ${media.lessThan('900px')`
    flex-direction: column;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  `}

  ${media.lessThan('768px')`
    max-width: 300px;
  `}
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 460px;

  ${media.lessThan('900px')`
    min-width: 300px;
  `}
`;

export const LineTitle = styled.h2`
  width: 32px;
  height: 3px;
  border-radius: 10px;
  background: #da3c1f;
  margin-bottom: 0.625rem;
`;

export const Title = styled.div`
  font-weight: bold;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: normal;
  padding: 1rem 0 0.2rem 0;
  color: #6b6b6b;
  font-weight: bold;
`;

export const Information = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  /* background-color: green; */

  ${media.lessThan('900px')`
    padding-top: 1.5rem;
  `}
`;

export const ButtonWrapper = styled.div`
  padding: 1rem 0 0.2rem 0;
  max-width: 400px;
`;

export const IframeWrapper = styled.div`
  padding: 1rem 0 0.2rem 0;
  height: 100%;

  ${media.lessThan('900px')`
    height: 250px;
  `}
`;

export const Iframe = styled.iframe`
  border: 0;
  width: 100%;
  height: 100%;
`;
