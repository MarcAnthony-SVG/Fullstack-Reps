const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "!QW@#ER$",
  database: "fullstackreps",
});

connection.connect();

const retrieveAllEmployees = (cb) => {
  connection.query("SELECT * FROM employees", function (
    error,
    results,
    fields
  ) {
    if (error) {
      cb(error, null);
    } else {
      cb(null, results);
    }
  });
};
const retrieveSingleEmployee = (cb) => {
  connection.query("SELECT id FROM employees", function (error,id
  ) {
    if (error) {
      cb(error, null);
    } else {
      cb(null, id);
    }
  });
};

module.exports = {
  retrieveAllEmployees,
  retrieveSingleEmployee
};
