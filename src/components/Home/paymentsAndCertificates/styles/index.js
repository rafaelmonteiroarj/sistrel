import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div``;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;

  ${media.lessThan('1000px')`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

export const Item = styled.li`
  ${media.lessThan('1000px')`
    padding: 1rem;
  `}
`;

export const LineCertificate = styled.h5`
  font-weight: bold;
  color: var(--color3);
  padding-bottom: 1rem;

  ${media.lessThan('1000px')`
    text-align: center;
  `}
`;

export const Image = styled.img``;
