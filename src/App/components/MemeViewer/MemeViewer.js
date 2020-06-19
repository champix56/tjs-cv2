import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.css';

class MemeViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { meme: props.meme ,id:props.memeId};
  }
  componentDidMount(){
    if(this.props.memeId)
    fetch(`http://localhost:780/memes/${this.props.memeId}`)
      .then(r=>r.json()).then(r=>{
          this.setState({meme:r})
        return r;
      });
  }
  componentWillReceiveProps() {
   if(this.props.meme)
    this.setState({ meme: this.props.meme })
  }   
  render() {
    return (
      <div className={styles.MemeViewer} data-testid="MemeViewer">
        <svg viewBox="0 0 100 100" style={{ width: '100%', maxHeight: '70vh' }}>
          <image xlinkHref={this.state.meme !== undefined && this.state.meme.image.url} x={0} y="0" height="100" width="100" />
          {this.state.meme !== undefined && this.state.meme.texts.map((e, i) => {
            return <text x={e.x} y={e.y} style={{ fill: 'white', fontSize: '15', fontWeight: '900' }}
              key={`svg-text-${i}`}
            >{e.value}</text>
          })}
        </svg>
      </div>
    );
  }
}
MemeViewer.propTypes = { meme: PropTypes.object };

MemeViewer.defaultProps = {
  //  meme: 
  //   { 
  //     titre: 'titre meme', 
  //     image: { id: 1, url: 'img/seigneur.jpg' }, 
  //     texts: [{ x: 15, y: 35, value: 'React is' }, { x: 65, y: 70, value: 'cool' }] 
  //   } 
};

export default MemeViewer;
