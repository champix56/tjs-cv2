import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';
import ImageFlowLayout from '../ImageFlowLayout/ImageFlowLayout';
import InputText from '../InputText/InputText';
import MemeContentTextEditor from '../MemeContentTextEditor/MemeContentTextEditor';
import MemeTextsList from '../MemeTextsList/MemeTextsList';
import Button from '../Button/Button';
const initialState = {
  meme: { image: {}, titre: '', texts: [] },
  images: []
};
class MemeForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  componentDidMount = () => {
    fetch('http://localhost:780/images').then((responseStream => responseStream.json())).then((objetjson) => {
      this.setState({ images: objetjson });
      console.log(objetjson);
    })
  }
  formChanged=(meme)=>{
    this.props.onChange(meme);
  }
  render() {
    return (
      <form className={styles.MemeForm} data-testid="MemeForm">
        <h3>titre</h3>
        <InputText changementSubi={
          (evt) => {   
            const memeState= { ...this.state.meme, titre: evt.currentTarget.value };  
            this.formChanged(memeState);
            this.setState({
              meme:memeState
            })
          }
        }
          value={this.state.meme.titre} />
        <h3>Selection images : </h3>
        <ImageFlowLayout images={this.state.images} onClick={(image) => {
          const memeState={ ...this.state.meme, image: image };
          this.formChanged(memeState);
          this.setState({ meme:  memeState})

        }}></ImageFlowLayout>
        <h3>Ajouter un text</h3>
        <MemeTextsList texts={this.state.meme.texts}></MemeTextsList>

        <MemeContentTextEditor onAdd={
          (text)=>{
            const memeState={...this.state.meme,texts:[...this.state.meme.texts,text]};
            this.formChanged(memeState);
            this.setState({meme:memeState});
          }
        }></MemeContentTextEditor>
        <hr/>
        <Button label="Enregistrer meme" lorsDuClick={this.saveMeme}/>
        {/* {JSON.stringify(this.state)} */}
      </form>
    );
  }
  saveMeme=()=>{
  //   const configFetch={method:this.state.meme.id?'PUT':'POST',headers:{
  //     "Content-Type":"application/json"
  //   },
  //   body:JSON.stringify(this.state.meme)
  // }
  //   const url ='http://localhost:780/meme'+this.state.meme.id?'/'+this.state.meme.id:'';
  //   fetch(url,configFetch).then();
  // }
    let xhr=new XMLHttpRequest();
    const url ='http://localhost:780/memes'+(this.state.meme.id?'/'+this.state.meme.id:'');
    xhr.open(this.state.meme.id?'PUT':'POST',url);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.onreadystatechange=(evt)=>{
      if(xhr.readyState<3)return;
      console.log(evt.currentTarget)

    }
  xhr.send(JSON.stringify(this.state.meme));
  }
}

MemeForm.propTypes = {onChange:PropTypes.func.isRequired};

MemeForm.defaultProps = {};

export default MemeForm;
