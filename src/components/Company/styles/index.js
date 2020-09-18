import styled from 'styled-components';
import media from 'styled-media-query';

export const Company = styled.div`
  display: flex;
  flex-direction: row;

  ${media.lessThan('768px')`
    flex-direction: column;
  `}
`;
