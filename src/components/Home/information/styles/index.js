import styled from 'styled-components';
import media from 'styled-media-query';

export const InformationWrapper = styled.div`
  width: 50%;
  padding: 0 1rem;
  font-size: 1.2rem;

  ${media.lessThan('1280px')`
    font-size: 1rem;
  `}

  ${media.lessThan('928px')`
    font-size: 0.9rem;
  `}

  ${media.lessThan('768px')`
    width: 100%;
    padding: 1rem 0;

    p {
      padding: 10px 0;
    }
  `}
`;

export const Dark = styled.b`
  font-weight: bold;
`;
