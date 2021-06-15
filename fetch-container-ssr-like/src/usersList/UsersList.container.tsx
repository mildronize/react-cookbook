import React from 'react';
import { Action } from "react-fetching-library";
import { useQuery } from 'react-fetching-library';
import { UsersList } from './UsersList';

export type User = {
  uuid: string;
  firstName: string;
  lastName: string;
  description: string;
  avatar: string;
  role: string;
};


export default function () {
  const { loading, payload, error, query } = useQuery({
    method: "GET",
    endpoint: "/users",
  } as Action<User[]>);

  return <UsersList loading={loading} error={error} users={payload} onReload={query} />;
};
