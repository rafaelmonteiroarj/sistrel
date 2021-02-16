import styled from 'styled-components';
import media from 'styled-media-query';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 2rem;

  ${media.lessThan('1024px')`
    padding: 0;
  `}
`;

export const LineTitle = styled.h2`
  width: 32px;
  height: 3px;
  border-radius: 10px;
  background: var(--color3);
  margin-bottom: 0.625rem;
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

export const FileName = styled.span`
  padding: 0.3rem 0 0.2rem 0;
`;

export const Black = styled.i`
  font-weight: bold;
`;

export const Icon = styled.i`
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  color: var(--color3);
`;

export const Error = styled.span`
  color: var(--color3);
`;

export const FileWrapper = styled.div`
  padding: 1rem 0 0.2rem 0;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const FileSelectedWrapper = styled.div`
  display: flex;
`;

export const File = styled.span``;

export const Desc = styled.span`
  font-weight: 600;
`;

export const Desc1 = styled.span`
  color: var(--color3);
  font-weight: 600;
`;

export const LabelFile = styled.label`
  margin-left: 1rem;
  background-color: var(--color3);
  padding: 0 1rem;
  cursor: pointer;
  color: #ffffff;
`;
