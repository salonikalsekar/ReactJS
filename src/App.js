import React, { Component } from 'react';
import './App.css'
import Person from './Person/Person'
class App extends Component{
  state = {
    persons:[
      { name: 'Sal', age: 23 },
      { name: 'Samru', age: 21 },
      { name: 'Sanju', age: 55 }
    ], 
    otherState: "some value"
  }

  switchHandler = () => {
      this.setState({persons:[
        { name: 'Saloni', age: 32 },
        { name: 'Samruddhi', age: 12 },
        { name: 'Sanjay', age: 55 }
      ]})
  }


  render(){
    return(
      <div className = "App">
        <h1>hello</h1>
        <p>Yo</p>
        <button onClick={this.switchHandler}>Switch</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} age={this.state.persons[1].age}>This is me</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    )
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'hello'))

  }

}

export default App;