import React, { Component } from "react";
import exampleEmployees from "./exampleEmployees";
import EmployeeList from "./components/EmployeeList";
import axios from "axios";
// import Employee from "./components/Employee";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: exampleEmployees,
      placeholder: "",
      // allEmployees: [], //Part 3b: ReactJS
    };
  }
  example = () => {
    this.setState({ data: exampleEmployees[this.placeholder] });
  };

  // componentDidMount() { // Part 3b: ReactJS
  //   axios.get(`https://localhost:3005/page1`).then((res) => {
  //     const allEmployees = res.data;
  //     this.setState({ allEmployees });
  //   });
  // }
  render() {
    return (
      <div>
        <h1>Full Stack Reps!</h1>

        <EmployeeList data={this.state.data} />
        <form>
          <input placeholder="Enter employee id"></input>
          <button onClick={this.example} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
