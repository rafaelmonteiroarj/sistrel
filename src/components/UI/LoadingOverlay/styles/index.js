import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background: ${(props) => props.backgroundColor};
  justify-content: center;
  align-items: center;
`;

export const SpinContainer = styled.div`
  text-align: center;
`;

export const Title = styled.span`
  color: ${(props) => props.color};
  font-weight: bold;
  position: relative;
  top: -107px;
`;

export const Spin = styled.div`
  border: 3px solid ${(props) => props.color};
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;
  border-left-color: transparent;
  border-right-color: transparent;
  animation: rotate 2s cubic-bezier(0.26, 1.36, 0.74, -0.29) infinite;
  -webkit-animation: rotate 2s cubic-bezier(0.26, 1.36, 0.74, -0.29) infinite;
  -moz-animation: rotate 2s cubic-bezier(0.26, 1.36, 0.74, -0.29) infinite;
`;
