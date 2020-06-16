import React from 'react';
import PropTypes from 'prop-types';
import styles from './Mainapp.module.css';

const Mainapp = () => (
  <div className={styles.Mainapp} data-testid="Mainapp">
    Mainapp Component
  </div>
);

Mainapp.propTypes = {};

Mainapp.defaultProps = {};

export default Mainapp;
