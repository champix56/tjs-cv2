import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
import Navlink from './Navlink/Navlink';

const Navbar = () => (
  <ul className={styles.Navbar} data-testid="Navbar">
      <Navlink href="/memes">Lien 1</Navlink>
      <Navlink href="/memes/1">lien2</Navlink>
      
    </ul>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
