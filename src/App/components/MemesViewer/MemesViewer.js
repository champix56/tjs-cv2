import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemesViewer.module.css';
import MemeViewer from '../MemeViewer/MemeViewer';
import memeStore from '../../stores/MemeRedux';
class MemesViewer extends React.Component {
  constructor(props) {
    super(props);
    //ajout de props et super props
    //notre etat initial sera la liste contenue dans l'etat du state
    const storeState=memeStore.getState();
    this.state={memes:storeState.memes}
    //abonnement aux changement de l'etat 
    //la recuperation du nouvelle etat se fait par store.getState
    memeStore.subscribe(()=>this.setState({memes:memeStore.getState().memes}))
  }
  
  render() {
    return (
      <div className={styles.MemesViewer} data-testid="MemesViewer">
        {this.state.memes.map((e,i)=>{
          return <MemeViewer memeId={e.id}
            key={`meme-${i}`}
          />})}
      </div>
    );
  }
}
MemesViewer.propTypes = {};

MemesViewer.defaultProps = {};

export default MemesViewer;
