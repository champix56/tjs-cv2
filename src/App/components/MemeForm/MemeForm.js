import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';
import ImageFlowLayout from '../ImageFlowLayout/ImageFlowLayout';

const MemeForm = () => {
  let img=[{id:0,url:'img/kid1.jpg'},{id:1,url:'img/fry1.jpg'}];
  return (
  <form className={styles.MemeForm} data-testid="MemeForm">
    <h3>Selection Image :</h3>
    <ImageFlowLayout images={img}/>
  </form>
);
}

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
