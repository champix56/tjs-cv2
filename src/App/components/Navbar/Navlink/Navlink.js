import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navlink.module.css';
import { Link } from 'react-router-dom';

const Navlink = (props) =>{
  console.log(props)
  return (
  <li className={styles.Navlink} data-testid="Navlink">
  <Link to={props.href}>{props.href}</Link>
  </li>
);}

Navlink.propTypes = {};

Navlink.defaultProps = {};

export default Navlink;
