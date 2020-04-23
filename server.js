const express = require("express");
const app = express();
const path = require("path");
const PORT = 3005;
const queries = require("./queries");

app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("/page1", (req, res) => {
  queries.retrieveAllEmployees((err,data)=>{
    if(err){
      res.send('err');
    } else {
      res.status(200).send(data);
    }
  })
})
app.get("/page2", (req, res) => {
  queries.retrieveSingleEmployee((err,id)=>{
    if(err){
      res.send('err');
    } else {
      res.status(200).send(id);
    }
  })
});

app.listen(PORT, () => {
  console.log(`server is running and listening on port ${PORT}`);
});
