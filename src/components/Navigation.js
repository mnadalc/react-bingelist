import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import * as Routes from '../constants/Routes';

const MainViewNav = () => (
  <>
    <Nav>
      <NavbarBrand className='white-label'>My Binge List</NavbarBrand>
      <NavItem className='right-alignment-navbar'>
        <Link to={Routes.FAVOURITES}>
          <img alt='Favorites link page' src='../../img/png/favorites.png' />
        </Link>
      </NavItem>
    </Nav>
    <style jsx>{`
      .right-alignment-navbar {
        position: absolute;
        right: 2rem;
        top: 0.8rem;
      }
    `}</style>
  </>
);

const FavouritesNav = () => (
  <>
    <Nav navbar>
      <NavItem className='left-alignment-navbar'>
        <Link to={Routes.BINGE_LIST}>
          <FontAwesomeIcon data-testid='backIcon' icon={faArrowLeft} inverse />
        </Link>
      </NavItem>
      <NavbarBrand className='white-label'>Favourite Movies</NavbarBrand>
    </Nav>
    <style jsx>{`
      .left-alignment-navbar {
        position: absolute;
        left: 2rem;
        top: 0.8rem;
      }
    `}</style>
  </>
);

const Navigation = withRouter(props => {
  const location = props.location.pathname;

  let customNav;

  if (location === Routes.FAVOURITES) {
    customNav = FavouritesNav();
  } else {
    customNav = MainViewNav();
  }

  return (
    <Navbar color='dark' dark>
      {customNav}
      <style jsx>
        {`
          .navbar {
            justify-content: center;
            align-items: center;
            align-content: center;
            font-size: 20px;
          }
        `}
      </style>
    </Navbar>
  );
});

export default Navigation;
