import styled from 'styled-components';
import media from 'styled-media-query';

export const Title = styled.div`
  color: var(--color-title);
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  padding-bottom: 0.1rem;

  ${media.lessThan('620px')`
    font-size: 1.2rem;
  `}

  ${media.lessThan('460px')`
    font-size: 1rem;
  `}
`;

export const Description = styled.div`
  text-align: center;
  font-weight: bold;
  padding-bottom: 2rem;

  ${media.lessThan('425px')`
    font-size: 0.8rem;
  `}

  ${media.lessThan('375px')`
    font-size: 0.7rem;
  `}
`;
