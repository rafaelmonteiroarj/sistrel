import 'dotenv/config';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

const uploadLink = createUploadLink({
  uri: process.env.REACT_APP_URI_CLIENT,
  headers: { 'keep-alive': 'true' }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: uploadLink
});

export default client;
