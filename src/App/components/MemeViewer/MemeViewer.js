import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.css';

const MemeViewer = (props) => {
  console.log('MemeViewer');
  return (
  <div className={styles.MemeViewer} data-testid="MemeViewer">
    <svg viewBox="0 0 100 80">
      <image xlinkHref={props.meme.image&&props.meme.image.url} alt="" x="0" y="0" width="80" height="100"/>
    </svg>
  </div>
);}

MemeViewer.propTypes = {meme:PropTypes.object.isRequired};

MemeViewer.defaultProps = {};

export default MemeViewer;
