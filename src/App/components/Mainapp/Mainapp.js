import React from 'react';
import PropTypes from 'prop-types';
import styles from './Mainapp.module.css';
import MemeForm from '../MemeForm/MemeForm';

const Mainapp = () => (
  <div className={styles.Mainapp} data-testid="Mainapp">
    <MemeForm></MemeForm>
  </div>
);

Mainapp.propTypes = {};

Mainapp.defaultProps = {};

export default Mainapp;
