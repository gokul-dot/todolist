import React,{Component} from 'react';
export class Addtodo extends Component{
  state={
    title:''
  }
  onSubmit=(e)=>{
    e.preventDefault();
    this.props.Addtodo(this.state.title);
    this.setState({title:''});
  }
  onChange=(e)=>this.setState({ [e.target.name]:e.target.value});
  render(){
  return(
    <form  onSubmit={this.onSubmit} style={{display:'flex'}}>
    <input type="text" style={{ flex:'10',padding:'5px'}} name="title" placeholder="add todo ..." value={this.state.title} onChange={this.onChange}/>
    <input type="submit" style={{flex:'1'}} value="submit" className="btn"/>
    </form>
  )
}
}
export default Addtodo;