import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.css';

const MemeViewer = () => (
  <div className={styles.MemeViewer} data-testid="MemeViewer">
    <svg viewBox="0 0 100 100" style={{width:'100%', maxHeight:'70vh'}}>
      <rect x="5" y="2" width="45" height="33" fill="tomato"/>
    </svg>
  </div>
);

MemeViewer.propTypes = {};

MemeViewer.defaultProps = {};

export default MemeViewer;
