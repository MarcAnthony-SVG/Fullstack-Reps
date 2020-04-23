import React from "react";
import Employee from "./Employee";

const EmployeeList = (props) => {
  return (
    <ul>
      {props.data.map((el,index) => 
          <Employee key={index} 
          value={el} />
  )}
  </ul>
  );
  }
export default EmployeeList;

