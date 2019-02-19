import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Malek from './Malek';
import AddName from './AddName';

class App extends Component {
  state={
names:[{name:'malek',age:23,id:1},{name:'anas',age:34,id:2},{name:'hassan', age:32,id:3}]

  }
  

addName=(newName) =>{
newName.id=Math.random();
let names=[...this.state.names,newName]
this.setState({
  names:names
})
}
deleteName=(id) =>{
let names=this.state.names.filter(Malek => {
  return Malek.id !== id
});
this.setState({
  names:names
})
}

  render() {
    return (
      <div className="App">
       <Malek names={this.state.names} onDelete={this.deleteName}/>
      <AddName  addName={this.addName}/>
      <AddName  addName={this.addName}/>
      </div>
    );
  }
}

export default App;
