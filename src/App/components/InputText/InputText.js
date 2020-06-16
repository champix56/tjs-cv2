import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputText.module.scss';

const InputText = (props) => (
  <input placeholder="Saisissez Text" className={styles.InputText} data-testid="InputText" value={props.value} onChange={props.changementSubi}/>
);
InputText.propTypes = {value:PropTypes.string.isRequired,changementSubi:PropTypes.func.isRequired};

InputText.defaultProps = {value:""};

export default InputText;
