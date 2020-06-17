import React from 'react';
import PropTypes from 'prop-types';
import styles from './Mainapp.module.css';
import MemeForm from '../MemeForm/MemeForm';
import MemeViewer from '../MemeViewer/MemeViewer';

const Mainapp = () => (
  <div className={styles.Mainapp} data-testid="Mainapp">
    <MemeViewer></MemeViewer>
    <MemeForm></MemeForm>
  </div>
);

Mainapp.propTypes = {};

Mainapp.defaultProps = {};

export default Mainapp;
