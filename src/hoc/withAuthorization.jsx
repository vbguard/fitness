import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthUserContext from './AuthUserContext';
import { firebase } from '../services/firebase';
// import * as routes from '../routes';

const withAuthorization = authCondition => WrappedComponent => {
  class WithAuthorization extends Component {
    static propTypes = {
      history: PropTypes.objectOf(Object).isRequired,
    };

    componentDidMount() {
      const { history } = this.props;
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          history.push('SIGN_IN');
        }
      });
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser => (authUser ? <WrappedComponent {...this.props} /> : null)}
        </AuthUserContext.Consumer>
      );
    }
  }

  return withRouter(WithAuthorization);
};

export default withAuthorization;
