import styled from 'styled-components';
import media from 'styled-media-query';

export const SpecialtyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

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

export const SpecialtyItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Image = styled.img`
  height: 180px;
  width: 180px;
`;

export const Desc = styled.span`
  font-weight: bold;
  text-align: center;
  padding: 1rem;
`;
