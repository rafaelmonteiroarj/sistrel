import styled from 'styled-components';
import media from 'styled-media-query';

export const NotFoundWrapper = styled.div`
  display: flex;
  padding: 1rem;
  max-width: 1200px;
  margin: auto;
  justify-content: center;

  ${media.lessThan('550px')`
    padding: 0;
    width: 350px;
  `}

  ${media.lessThan('410px')`
    padding: 0;
    width: 300px;
  `}

  ${media.lessThan('360px')`
    padding: 0;
    width: 200px;
  `}
`;

export const Title = styled.h1`
  color: var(--color-9);
  font-size: 170px;
  font-weight: 100;
  line-height: 170px;
  display: block;
  text-align: right;
  padding: 0;
  margin: 0;
`;
