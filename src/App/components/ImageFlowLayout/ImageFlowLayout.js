import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageFlowLayout.module.css';

const ImageFlowLayout = (props) => (
  <div className={styles.ImageFlowLayout} data-testid="ImageFlowLayout">
    <div className={styles.flowContainer} >
      {props.images.map((e,i)=><img alt="" src={e.url}/>)}
    </div>
  </div>
);

ImageFlowLayout.propTypes = {images:PropTypes.array.isRequired};

ImageFlowLayout.defaultProps = {};

export default ImageFlowLayout;
