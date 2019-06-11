import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    name : 'techsith'
  }
  changeNamefromInput = (event) => {
    this.setState({
      name : event.target.value 
    })

  }
  changeName = (newName) => {
    this.setState({
     name :newName
    })
  }
  render() {
    return (
      <div className = "App">
      <br></br>
      <button onClick ={() => this.changeName("mannu):")}>This is using an Annonymous Function</button>
      <button onClick ={this.changeName.bind(this, "mannu:)")}>This is using an Annonymous bind Function</button>
      <br/><br/>
      <input type="text" onChange = {this.changeNamefromInput} value = {this.state.name} />
    
      <div>{this.state.name }</div>
      </div>
    )
  }
}

export default App;
