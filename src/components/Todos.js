import React, { Component } from 'react';
import TodoItem from './Todoitem';
import PropTypes from 'prop-types';
class Todos extends Component{
  
render() {
  return this.props.todos.map((to)=>(
   <TodoItem key={to.id} to={to} markcom={this.props.markcom} deltodos={this.props.deltodos}/>
  ));
}
}
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}
export default Todos;
