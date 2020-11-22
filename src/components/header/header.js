import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import StackLogo from './logo-stackoverflow.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__row">
          <Link to="/" className="header__logo">
            <img src={StackLogo} alt="Stack Ovarflow logo" />
          </Link>
          <form className="header__form">
            <input type="search" placeholder="Search question..."/>
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18"><path d="M18 16.5l-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z"></path></svg>
          </form>
          <button className="btn header__login-btn">
            Log in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;