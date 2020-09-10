import styled from 'styled-components';
import media from 'styled-media-query';

export const Line = styled.hr`
  height: 1px;
  border: none;
  margin-top: 20px;
  margin-bottom: 40px;
  /* width: 32px; */
  background: var(--color4);
`;

export const Company = styled.div`
  display: flex;
  flex-direction: row;

  ${media.lessThan('768px')`
    flex-direction: column;
  `}
`;

export const Title = styled.div`
  color: #da251b;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  padding-bottom: 0.1rem;

  ${media.lessThan('620px')`
    font-size: 1.2rem;
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
