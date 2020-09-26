import styled from 'styled-components';
import media from 'styled-media-query';

export const IframeWrapper = styled.div`
  padding: 1rem 0 0.2rem 0;
  height: 100%;

  ${media.lessThan('1024px')`
  height: 250px;
`}
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
`;
