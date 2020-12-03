import styled from 'styled-components';
import media from 'styled-media-query';

export const Information = styled.div`
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
      /* padding: 10px 0; */
    }
  `}
`;

export const ImageWrapper = styled.div`
  padding: 1rem 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 450px;
  object-fit: cover;
`;

export const ImageExample = styled.div`
  background: var(--background5);
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color);
`;
