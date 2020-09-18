import styled from 'styled-components';
import media from 'styled-media-query';

export const CommitmentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1rem 0;
`;

export const Commitment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding-top: 1rem;
`;

export const Title = styled.div`
  color: #da251b;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
  text-transform: uppercase;

  ${media.lessThan('620px')`
    font-size: 1.2rem;
  `}
`;

export const Description = styled.div`
  padding: 0 1rem;
  font-size: 1rem;

  ${media.lessThan('1280px')`
    font-size: 1rem;
  `}

  ${media.lessThan('928px')`
    font-size: 0.9rem;
  `}

  ${media.lessThan('768px')`
    width: 100%;
    padding: 1rem 0;
  `}
`;

export const Text = styled.span`
  display: block;
`;

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
      padding: 10px 0;
    }
  `}
`;
