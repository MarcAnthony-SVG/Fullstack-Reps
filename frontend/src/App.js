import React, { Component } from "react";
import exampleEmployees from "./exampleEmployees";
import EmployeeList from "./components/EmployeeList";
// import Employee from "./components/Employee";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: exampleEmployees,
      placeholder: "",
    };
  }
  hello = () =>{
 this.setState({data: exampleEmployees[this.placeholder]});
  };
  render() {
    return (
      <div>
        <h1>Full Stack Reps!</h1>

        <EmployeeList data={this.state.data}/>
        <form>
          <input placeholder="Enter employee id" ></input>
          <button onClick={this.hello} type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
