import styled from 'styled-components';
import media from 'styled-media-query';

export const WorkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  ${media.lessThan('1256px')`
    max-width: 800px;
  `}
`;

export const Works = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;

  ${media.lessThan('855px')`
    justify-content: center;
  `}
`;

export const WorkItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1rem;
  width: 400px;

  ${media.lessThan('855px')`
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

  ${media.lessThan('855px')`
    text-align: center;
  `}
`;
