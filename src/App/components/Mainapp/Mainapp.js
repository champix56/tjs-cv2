import React from 'react';
import PropTypes from 'prop-types';
import styles from './Mainapp.module.css';
import MemeForm from '../MemeForm/MemeForm';
import MemeViewer from '../MemeViewer/MemeViewer';
import MemesViewer from '../MemesViewer/MemesViewer';
import {
  Route,
  Switch,
  useParams
} from 'react-router-dom'

const initialSate = {
  currentMeme: {
    titre: 'titre meme',
    image: { id: 1, url: 'img/trololo.jpg' },
    texts: [{ x: 15, y: 35, value: 'React is' }, { x: 65, y: 70, value: 'cool' }]
  }
};
class Mainapp extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialSate;
  }
  changeCurrentMeme = (meme) => {
    this.setState({ currentMeme: meme });
  }
  render() {
    // let params=useParams();
    // console.log(params);
    return (
      <>
        <Switch>
          <Route exact path="/">
            <div className={styles.Mainapp} data-testid="Mainapp">
              <MemeViewer meme={this.state.currentMeme}></MemeViewer>
              <MemeForm onChange={this.changeCurrentMeme} ></MemeForm>
            </div>
            <MemesViewer />
          </Route>
          <Route path="/memes/:id">
            <RouteParamWrapper/>
          </Route>
          <Route path="/memes">
            <MemesViewer />
          </Route>
        </Switch>
      </>
    );
  }
}

const RouteParamWrapper=()=>{
  let {id}=useParams();
  console.log(useParams());
  return    <MemeViewer memeId={id} />
}
Mainapp.propTypes = {};

Mainapp.defaultProps = {};

export default Mainapp;
