import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemesViewer.module.css';
import MemeViewer from '../MemeViewer/MemeViewer';

class MemesViewer extends React.Component {
  constructor() {
    super();
    this.state={memes:[]}
  }
  componentDidMount(){
    fetch('http://localhost:780/memes').then((r)=>{
      return r.json()})
      .then(r=>{
      this.setState({memes:r});
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className={styles.MemesViewer} data-testid="MemesViewer">
        {this.state.memes.map(e=>{
          console.log(e);
          return <MemeViewer meme={e}/>})}
      </div>
    );
  }
}
MemesViewer.propTypes = {};

MemesViewer.defaultProps = {};

export default MemesViewer;
