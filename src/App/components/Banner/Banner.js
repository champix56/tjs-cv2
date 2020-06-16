import React from 'react';
import PropTypes from 'prop-types';
import styles from './Banner.module.css';
import logo from '../../../logo.svg';
const Banner = () => (
  <div className={styles.Banner} data-testid="Banner">
            <img src={logo} className="App-logo" alt="logo" />
            MEME <span className={styles.orange}>.editor</span>
  </div>
);

Banner.propTypes = {};

Banner.defaultProps = {};

export default Banner;
