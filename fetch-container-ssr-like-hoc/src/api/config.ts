import { createClient } from 'react-fetching-library';
import { RequestInterceptor } from 'react-fetching-library';
// In real application this const will be stored in ENV's
const HOST = 'https://private-34f3a-reactapiclient.apiary-mock.com';

const requestHostInterceptor: (host: string) => RequestInterceptor = host => () => async action => {
  return {
    ...action,
    endpoint: `${host}${action.endpoint}`,
  };
};

export const Client = createClient({
  requestInterceptors: [requestHostInterceptor(HOST)],
});
