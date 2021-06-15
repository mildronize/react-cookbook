import React, { Component } from 'react'
import { Action } from "react-fetching-library";
import { Query } from 'react-fetching-library';

/**
 * Wrap component with Query (react-fetching-library)
 * @param WrappedComponent The component
 * @param fetchAction Action from `react-fetching-library`
 */

export type withQueryProps = {
  loading: boolean;
  error: boolean;
  payload: any;
  onReload: () => void;
};

export const withQuery = (WrappedComponent: any, fetchAction: Action, initFetch? : boolean ) => {
  return class ComponentWithLoading extends Component {
    render() {

      initFetch = initFetch === undefined ? true : false;

      return (
        <Query action={fetchAction} initFetch={initFetch}>
          {({ loading, error, payload, query }) => {
            return <WrappedComponent {...this.props} loading={loading} error={error} payload={payload} onReload={query} />
          }}
        </Query>
      )
    }
  }
}
