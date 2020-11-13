import React from 'react';
import { ClientContextProvider } from 'react-fetching-library';
import { Client } from './api/config';
import  UsersList from './usersList/UsersList';

const App = () => {
  return (
    <ClientContextProvider client={Client}>
      <UsersList />
    </ClientContextProvider>
  );
};

export default App;
