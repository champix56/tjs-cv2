import React from 'react';
import PropTypes from 'prop-types';
import styles from './Mainapp.module.css';
import MemeForm from '../MemeForm/MemeForm';
import MemeViewer from '../MemeViewer/MemeViewer';

class Mainapp extends React.Component {
  constructor() {
    super();
    this.state = { currentMeme: {} }
  }
  render() {
    return (
      <><div className={styles.Mainapp} data-testid="Mainapp">
        <MemeViewer meme={this.state.currentMeme}></MemeViewer>
        <MemeForm onChange={(meme) => {
          return this.setState({currentMeme:meme})}
          } />
      </div>
      {JSON.stringify(this.state)}
      </>
    );
  }
}
Mainapp.propTypes = {};

Mainapp.defaultProps = {};

export default Mainapp;
