import React, { Component } from "react";

export class App extends Component {
  state = {
    n1: "",
    n2: "",
    res: ""
  };
  divide = () =>{
    let{n1, n2} = this.state
    if(n1 && n2 !== null){
      this.setState({
        res: n1 / n2,
      })
    }
  }
  multiplic = () =>{
    let{n1, n2} = this.state
    if (n1 && n2 !== null){
      this.setState({
        res: n1 * n2,
      })
    }
  }
  subtraction = () =>{
    let{n1, n2} = this.state
    if (n1 && n2 !== null){
      this.setState({
        res: n1 - n2,
      })
    }
  }
  addition = () =>{
    let{n1, n2} = this.state
    if (n1 && n2 !== null){
      this.setState({
        res: n1 + n2,
      })
    }
  }
  clear = () =>{
    let{n1, n2} = this.state
    if (n1 && n2 !== ""){
      this.setState({
        n1: 0,
        n2: 0,
      })
    }
  }
  handleChange2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  handleChange1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  render() {
    return (
      <div>
        <h1>Calc App</h1>
        <input onChange={this.handleChange1} value={this.n1} />
        <input onChange={this.handleChange2} value={this.n2}/>
        <button onClick={this.divide}>/</button>
        <button onClick={this.multiplic}>*</button>
        <button onClick={this.subtraction}>-</button>
        <button onClick={this.addition}>+</button>
        <button onClick={this.clear}>Limpar</button>
        <h2>O resultado da operação é: {this.state.res}</h2>
      </div>
    );
  }
}

export default App;
