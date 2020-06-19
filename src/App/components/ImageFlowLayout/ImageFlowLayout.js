import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageFlowLayout.module.css';

const ImageFlowLayout = (props) => (
  <div className={styles.ImageFlowLayout} data-testid="ImageFlowLayout">
    <div className={styles.flowContainer} >
      {props.images.map((e,i)=><img alt=""  src={e.url} onClick={
        ()=>{
        return props.onClick(e);
        } 
        }
          key={`img-${i}`}
        />)}
    </div>
  </div>
);

ImageFlowLayout.propTypes = {images:PropTypes.array.isRequired,onClick:PropTypes.func};

ImageFlowLayout.defaultProps = {onClick:function(){}};

export default ImageFlowLayout;
