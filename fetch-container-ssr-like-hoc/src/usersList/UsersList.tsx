import React, { Fragment } from 'react';
import { Action } from "react-fetching-library";
import { withQuery, withQueryProps } from '../hoc/withQuery';

import {
  Avatar,
  Button,
  CircularProgress,
  Divider,
  List,
  ListItemText,
  ListItem,
  ListItemAvatar,
  Typography,
} from '../shared';

const UsersList = ({ loading, payload, error, onReload }: withQueryProps ) => {

  const users = payload as User[] | undefined;

  return (
    <List style={{ padding: '24px', display: 'flex', flexFlow: 'column' }}>
      {loading && <CircularProgress style={{ margin: '100px auto' }} />}

      {error && (
        <Button onClick={onReload} variant="contained" color="secondary">
          Error, click to reload
        </Button>
      )}

      {!loading && !error && users && (
        <ListItem>
          <Typography component="span" color="textPrimary">
            You can turn off wi-fi to see errors after fetch :)
          </Typography>
        </ListItem>
      )}

      {!loading &&
        !error &&
        users &&
        users.map(user => (
          <Fragment key={user.uuid}>
            <Divider variant="inset" />
            <ListItem>
              <ListItemAvatar>
                <Avatar alt={user.firstName} src={user.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={`${user.firstName} ${user.lastName}`}
                secondary={
                  <Fragment>
                    <Typography component="span" color="textPrimary">
                      {user.role}
                    </Typography>
                    {user.description}
                  </Fragment>
                }
              />
            </ListItem>
          </Fragment>
        ))}

      {!loading && !error && (
        <Button onClick={onReload} variant="contained" color="primary">
          Click to reload
        </Button>
      )}
    </List>
  );
};

export type User = {
  uuid: string;
  firstName: string;
  lastName: string;
  description: string;
  avatar: string;
  role: string;
};

export default withQuery(UsersList, {
  method: "GET",
  endpoint: "/users",
} as Action<User[]>)