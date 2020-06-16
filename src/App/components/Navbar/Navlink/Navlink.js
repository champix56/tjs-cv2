import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navlink.module.css';

const Navlink = (props) =>{
  console.log(props)
  return (
  <li className={styles.Navlink} data-testid="Navlink">
  <a href="">Un liens</a>
  </li>
);}

Navlink.propTypes = {};

Navlink.defaultProps = {};

export default Navlink;
