import styled from 'styled-components';
import media from 'styled-media-query';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const LineTitle = styled.h2`
  width: 32px;
  height: 3px;
  border-radius: 10px;
  background: var(--color3);
  margin-bottom: 0.625rem;
`;

export const Company = styled.div`
  padding-top: 1rem;
`;

export const Title = styled.div`
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  padding: 1rem 0 0.2rem 0;
  display: flex;
  flex-direction: column;
`;

export const TwoFields = styled.div`
  display: flex;
  flex-direction: row;

  ${media.lessThan('550px')`
    flex-direction: column;
  `}
`;

export const Right = styled.div`
  width: 50%;
  padding-left: 1.5rem;
  ${media.lessThan('550px')`
    padding-left: 0;
    width: 100%;
  `}
`;

export const Left = styled.div`
  width: 50%;
  ${media.lessThan('550px')`
    width: 100%;
  `}
`;

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: normal;
  padding: 1rem 0 0.2rem 0;
  color: var(--color-8);
  font-weight: bold;
`;

export const Error = styled.span`
  color: var(--color3);
`;
