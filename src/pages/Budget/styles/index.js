import styled from 'styled-components';
import media from 'styled-media-query';

export const BudgetWrapper = styled.div`
  display: flex;
  padding: 1rem;
  max-width: 1200px;
  margin: auto;

  ${media.lessThan('1024px')`
    flex-direction: column;
  `}

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

export const Information = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  /* background-color: green; */

  ${media.lessThan('1024px')`
    padding-top: 1.5rem;
  `}
`;

export const LineTitle = styled.h2`
  width: 32px;
  height: 3px;
  border-radius: 10px;
  background: var(--color3);
  margin-bottom: 0.625rem;
`;

export const Title = styled.div`
  font-weight: bold;
`;
