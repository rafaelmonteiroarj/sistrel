import styled from 'styled-components';
import media from 'styled-media-query';

export const WorkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 2rem;
  align-items: center;
  justify-content: start;

  ${media.lessThan('768px')`
    justify-content: center;
  `}
`;

export const WorkItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1rem;

  ${media.lessThan('768px')`
    width: 100%;
    align-items: center;
    flex-direction: column-reverse;
  `}
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Image = styled.img`
  padding: 1rem;
  width: 163px;
  height: 300px;
  object-fit: cover;
`;

export const Description = styled.div`
  ${media.lessThan('375px')`
    font-size: 0.8rem;
  `}
`;

export const Title = styled.div`
  color: var(--color-title);
  font-size: 1rem;
  font-weight: bold;
  padding-bottom: 0.5rem;

  ${media.lessThan('1024px')`
    font-size: 0.8rem;
  `}

  ${media.lessThan('768px')`
    text-align: center;
  `}
`;
