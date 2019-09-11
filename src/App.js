import React, { Component } from 'react';
import Todos from './components/Todos';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Addtodo from './components/layout/Addtodo';
import Header from './components/layout/Header';
import Abt from './components/pages/Abt';
import './App.css';
import axios from 'axios';
class App extends Component{
  state={
    todos:[
      
  ]
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res=>this.setState({todos: res.data}))
  }
  markcom=(id)=>{
    this.setState({todos:this.state.todos.map(to=>{
      if(to.id===id){
        to.completed=!to.completed
      }
      return to;
    }
    
    )})
  }
  deltodos=(id)=>{
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=>this.setState({
      todos: [...this.state.todos.filter(to=>to.id!==id)]
    }))

  }
  Addtodo=(title)=>{
    axios.post('https://jsonplaceholder.typicode.com/todos',{
      title,completed:false
    })
    .then(res=>this.setState({todos:[...this.state.todos,res.data]}));
  }
render() {
  return (
   <Router>
  <div className="cont">
     <Header /> 
     <Route exact path='/' render={props=>(
      <React.Fragment>
        <Addtodo Addtodo={this.Addtodo}/>
   <Todos todos={this.state.todos} markcom={this.markcom} deltodos={this.deltodos}/>
    
        </React.Fragment>
     )}/>
     <Route path='/Abt' component={Abt}/>
     </div>
   </Router>
  );
}
}
export default App;
