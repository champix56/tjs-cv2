import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
import Navlink from './Navlink/Navlink';

const Navbar = () => (
  <ul className={styles.Navbar} data-testid="Navbar">
      <Navlink href="/">New meme</Navlink>
      <Navlink href="/memes">Meme</Navlink>
      <Navlink href="/memes/1">Meme / 1</Navlink>
      
    </ul>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
