import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeTextsList.module.css';

const MemeTextsList = (props) => (
  <div className={styles.MemeTextsList} data-testid="MemeTextsList">
    <table>
    <thead>
      <tr>
        <th>X</th>
        <th>Y</th>
        <th>Value</th>
      </tr>
      </thead>
      <tbody>
      {props.texts.map((e,i)=><tr key={`text-${i}`}>
        <td>{e.x}</td>
        <td>{e.y}</td>
        <td>{e.value}</td>
      </tr>)}
     </tbody>
    </table>
  </div>
);

MemeTextsList.propTypes = { texts: PropTypes.array.isRequired };

MemeTextsList.defaultProps = {};

export default MemeTextsList;
