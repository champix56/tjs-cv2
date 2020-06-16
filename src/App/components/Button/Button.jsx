import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

 

const Button = (props) =>{
  console.log(props);
  let click=(evt)=>{
    console.log('fonction de click de Button.js',evt);
    props.lorsDuClick(evt);
  }
  return (
  <div className={styles.Button} data-testid="Button" onClick={click}>
    <div className={styles.buttonContainer}>
      {props.label}
    </div>
  </div>
);
}

Button.propTypes = {label:PropTypes.string.isRequired,lorsDuClick:PropTypes.func};

Button.defaultProps = {label:"Ok"};

export default Button;
