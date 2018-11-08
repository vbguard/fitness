import React, { Component } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';

class BurgerMenu extends Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const links = [
      ['Home page', '/'],
      ['Account Page', '/account'],
      // ['Change password', '/password'],
      ['Sign in', '/SIGN_IN'],
    ];

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {links.map(link => (
            <MenuItem
              key={link}
              selected={link === 'Home page'}
              onClick={this.handleClose}
            >
              <Link to={`${link[1]}`}>{link[0]}</Link>
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default BurgerMenu;
