import styled from 'styled-components';

export const InputAddOn = styled.div`
  display: flex;
  margin-bottom: 0.3em;
`;

export const InputAddOnItem = styled.span`
  display: flex;
  align-items: center;
  background-color: var(--background-option-1);
  color: var(--color-white);
  font: inherit;
  font-weight: normal;
  border: 1px solid var(--input-border-color);
  padding: 0.5em 0.75em;

  &:first-child {
    border-radius: 2px 0 0 2px;
  }

  &:last-child {
    border-radius: 0 2px 2px 0;
  }
`;

export const InputAddOnField = styled.input`
  flex: 1;
  background: var(--background-option-2);
  font-size: 14px;
  height: auto;

  &:disabled {
    background-color: #e9ecef;
    opacity: 1;
  }

  &:focus {
    outline: none;
    background-color: var(--input-focus-color);
  }

  &:not(:first-child) {
    border-left: 0;
  }

  &:not(:last-child) {
    border-right: 0;
  }

  &:first-child {
    border-radius: 2px 0 0 2px;
  }

  &:last-child {
    border-radius: 0 2px 2px 0;
  }
`;
