import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component{
getStyle=()=>{
  return{
  background:'#f4f4f4',
  borderBottom:'1px dotted',
  fontFamily:'fantasy',
  fontSize:'30px',
  letterSpacing:'2px',
  wordSpacing:'4px',
  textDecoration:this.props.to.completed?'line-through':'none'
}
}

render() {
  const{id,title}=this.props.to;
  return(
   
    <div style={this.getStyle()}>
    <input type="checkbox" onChange={this.props.markcom.bind(this,id)}/><button onClick={this.props.deltodos.bind(this,id)} style={butStyle}>X</button><h3>{title}</h3>
    
      </div>
  )
}
}
TodoItem.propTypes = {
  to: PropTypes.object.isRequired
}
 const butStyle={
  background: '#ff0000',
  float: 'right',
  borderRadius: '50%',
  cursor:'pointer',
  border:'none',
  padding:'5px 9px'
}


export default TodoItem;
 