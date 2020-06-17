import React from 'react';
import PropTypes from 'prop-types';
import styles from './Mainapp.module.css';
import MemeForm from '../MemeForm/MemeForm';
import MemeViewer from '../MemeViewer/MemeViewer';

const initialSate={currentMeme: { 
  titre: 'titre meme', 
  image: { id: 1, url: 'img/trololo.jpg' }, 
  texts: [{ x: 15, y: 35, value: 'React is' }, { x: 65, y: 70, value: 'cool' }] 
} };
class Mainapp extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialSate;
  }
  changeCurrentMeme=(meme)=>{
    this.setState({currentMeme:meme});
  }
  render() {
   return  (
     <>
      <div className={styles.Mainapp} data-testid="Mainapp">
        <MemeViewer meme={this.state.currentMeme}></MemeViewer>
        <MemeForm onChange={this.changeCurrentMeme} ></MemeForm>
      </div>
      {JSON.stringify(this.state)}
      </>
    );
  }
}

Mainapp.propTypes = {};

Mainapp.defaultProps = {};

export default Mainapp;
