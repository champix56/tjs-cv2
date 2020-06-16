import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeContentTextEditor.module.css';
import InputText from '../InputText/InputText';
import Button from '../Button/Button'

class MemeContentTextEditor extends React.Component {
  constructor(props){
    super(props);
    this.state={value:'',x:10,y:10}
  }
  render() {
    return (
      <div className={styles.MemeContentTextEditor} data-testid="MemeContentTextEditor">
        <InputText value={this.state.value} changementSubi={(evt) => {this.setState({value:evt.currentTarget.value}) }} />
        <br />
    x:<input type="number" min="0" max="100" step="0.1" value={this.state.x} onChange={(evt)=>{this.setState({x:evt.currentTarget.value})}} />
    y:<input type="number" min="0" max="100" step="0.1" value={this.state.y} onChange={(evt)=>{this.setState({y:evt.currentTarget.value})}}  />
        <br />
        {/* button de vidange du state local */}
        <Button lorsDuClick={(evt)=>{
         this.setState({value:'',x:10,y:10});
          }} label="Reinit."/>

        <Button lorsDuClick={(evt)=>{
          // evt.preventDefault();
          evt.stopPropagation();
          return this.props.onAdd(this.state)}} label="Add"/>
      </div>
    );
  }
}

MemeContentTextEditor.propTypes = {onAdd:PropTypes.func.isRequired};

MemeContentTextEditor.defaultProps = {onAdd:()=>{}};

export default MemeContentTextEditor;
