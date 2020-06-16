import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.css';
import Navlink from './Navlink/Navlink';

const Navbar = () => (
  <ul className={styles.Navbar} data-testid="Navbar">
      <Navlink href="">Lien 1</Navlink>
      <Navlink href=""><img src="https://www.meme-arsenal.com/memes/435a7b1a4c15acdf29ce6a72b63cdd30.jpg" />lien2</Navlink>
    </ul>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
