import { gql } from '@apollo/client';

export const ADD_CONTACT = gql`
  mutation createContact($data: CreateContactInput!) {
    createContact(data: $data) {
      id
    }
  }
`;

export const ADD_BUDGET = gql`
  mutation createBudget($data: CreateBudgetInput!, $files: [Upload!]) {
    createBudget(data: $data, files: $files) {
      id
    }
  }
`;

export const ADD_PROVIDER = gql`
  mutation createProvider($data: CreateProviderInput!, $files: [Upload!]) {
    createProvider(data: $data, files: $files) {
      id
    }
  }
`;
