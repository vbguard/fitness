import React, { Component } from 'react';
import ButtonForm from '@shared/button-form';
import Input from '@material-ui/core/Input';

import { auth } from '../../../services/firebase';
import styles from './styles.css';

class PasswordChangeForm extends Component {
  state = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

  onSubmit = event => {
    event.preventDefault();
    const { passwordOne } = this.state;
    const { state } = this;

    auth
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...state });
      })
      .catch(error => {
        this.setState({ error });
      });
    this.setState({
      passwordOne: '',
      passwordTwo: '',
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  resetState = () => {
    this.setState({
      passwordOne: '',
      passwordTwo: '',
      error: null,
    });
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '';
    const isDisabled = auth.isAuth();

    return (
      <form onSubmit={this.onSubmit}>
        <Input
          placeholder="New Password"
          className={styles.Input}
          value={passwordOne}
          name="passwordOne"
          type="password"
          onChange={this.handleChange}
          disabled={isDisabled}
        />
        <Input
          placeholder="Confirm New Password"
          className={styles.Input}
          value={passwordTwo}
          name="passwordTwo"
          type="password"
          onChange={this.handleChange}
          disabled={isDisabled}
        />
        <ButtonForm
          disabled={isInvalid}
          label="Update Password"
          text="Your password has been changed successfully"
        />
        {isDisabled && (
          <p className={styles.Warning_message}>
            *This option is active only for signin with email users
          </p>
        )}

        {error && <p className={styles.Error_Message}>{error.message}</p>}
      </form>
    );
  }
}

export default PasswordChangeForm;
