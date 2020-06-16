import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeTextsList.module.css';

const MemeTextsList = (props) => (
  <div className={styles.MemeTextsList} data-testid="MemeTextsList">
    <table>
      <tr>
        <th>X</th>
        <th>Y</th>
        <th>Value</th>
      </tr>
      {props.texts.map((e)=><tr>
        <td>{e.x}</td>
        <td>{e.y}</td>
        <td>{e.value}</td>
      </tr>)}
     
    </table>
  </div>
);

MemeTextsList.propTypes = { texts: PropTypes.array.isRequired };

MemeTextsList.defaultProps = {};

export default MemeTextsList;
