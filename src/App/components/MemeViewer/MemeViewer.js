import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeViewer.module.css';
import memeStore from '../../stores/MemeRedux';
class MemeViewer extends React.Component {
  constructor(props) {
    super(props);
    //verification qu'une props definissant un ID specifique  afficher
    //permet de preserver la fonction d'edition et la fonction d'affichage d'un meme qu'i n'est pas le meme courrant en edition
    if (this.props.memeId) {
      this.state = { meme: memeStore.getState().memes.find(a => a.id === this.props.memeId) };
    }
    else {
      //sinon edition du meme
      //on place dans l'etat du composnt le meme courrant 
      //qui est stockédans l'etat du store
      this.state = { meme: memeStore.getState().meme };
      //on adhere aux changements du store car nous somme 
      //en train de faire la partie edition (cf else)
      memeStore.subscribe(() => {
        //il y a eu un changement 
        //je met à jour mon state de composant avec l'etat actuelle
        //du store avec getState()
        this.setState({ meme: memeStore.getState().meme })
      })
    }
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
