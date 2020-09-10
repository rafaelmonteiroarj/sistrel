import styled from 'styled-components';
import media from 'styled-media-query';

export const Title = styled.div`
  color: #da251b;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  padding: 1rem;

  ${media.lessThan('620px')`
    font-size: 1.2rem;
  `}
`;

export const PartnersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  height: 54px;
  /* width: 180px; */
`;
