import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = () => (
  <div className={styles.Footer} data-testid="Footer">
    React is cool With Orsys &copy;2020
  </div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
