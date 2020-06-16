import React,{Component} from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';
import ImageFlowLayout from '../ImageFlowLayout/ImageFlowLayout';
let img = [{"id": 0, "url": "img/fry1.jpg"}, {"id": 1, "url": "img/futurama1.jpg"}];
class MemeForm extends Component {
  constructor(props){
    super(props);
    this.state={meme:{image:{},texts:[]}}
  }
  render() {
    return (
      <form className={styles.MemeForm} data-testid="MemeForm">
      <h3>Selection images : </h3>
      <ImageFlowLayout images={img} onClick={evt=>{

      this.setState({meme:{image:{url:evt.currentTarget.src}}})
      
      }}></ImageFlowLayout>
      {JSON.stringify(this.state)}
  </form>
    );
  }
}
 
MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
