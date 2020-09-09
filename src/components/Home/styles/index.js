import styled from 'styled-components';

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
`;

export const Title = styled.div`
  color: #da251b;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  padding-bottom: 0.1rem;
`;

export const Description = styled.div`
  text-align: center;
  font-weight: bold;
  padding-bottom: 2rem;
`;
