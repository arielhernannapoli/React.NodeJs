import React from 'react';
import { RouteComponentProps } from 'react-router';

export class User extends React.Component<RouteComponentProps<{}>, { email: string, password: string, error: boolean, msgError: string }> {
  render() {
    return (
      <div className="User">
        User
      </div>
    );
  }
}