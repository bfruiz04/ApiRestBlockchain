// load our app server using express somehow....
const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('combined'))

app.get("/", (req, res) => {
  console.log("Ok")
  res.send("Ok")
})

//get all persons
app.get("/persons", (req, res) => {
  var person = {
    personId: 1,
    firstName: "Jane",
    lastName: "Doe",
    email: "janedoe@example.com"
  }
  res.json(person) 
});

//post person
app.post('/', function(req, res) {
    
    var user_id = req.body.id;
    res.json(user_id);
});

app.put('/person', function (req, res) {
	
  res.send('Got a PUT request at /user');
});


app.delete('/person', function (req, res) {
  res.send('Got a DELETE request at /user');
});

// localhost:3003
app.listen(3003, () => {
  console.log("Server is up and listening on 3003...")
})