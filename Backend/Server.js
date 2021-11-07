const express = require('express')
const app = express()
const port = 4000

//import cors 
//include this library
const cors = require('cors');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//create an api in order for out front end to talk to back end 
//open an intergrated terminal to run our server
//change port 4000 to prevent clashing for front end server 
//to run server type node server.js in terminal


//cors will allow our frontend server call to our backend
//use cors again 
app.use(cors());

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});




app.get('/', (req, res) => {
  res.send('Hello World!')
})


//add new root point to get movies 

app.get('/api/movies',(req,res) =>{

  //json objects 
    const mymovies = [

{
"Title":"Avengers: Infinity War",
"Year":"2018",
"imdbID":"tt4154756",
"Type":"movie",
"Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
},
{
"Title":"Captain America: Civil War",
"Year":"2016",
"imdbID":"tt3498820",
"Type":"movie",
"Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
},
 ];

    //pass it down to the server 
    //object called movies 
    //sending the json with status code 200
    //always restart the server when code is changed 
    //we want our client to read  the json from the server 
    //to execute javascript we need to use cors
    //cross origin rescource sharing 
    //we need to install cores on server
    //npm install cors 

    res.status(200).json({movies:mymovies});
})


//when data is passed up
//take body of the thing passed up
//take in information 
//pass it up into the sever
//console.log it out
//use body parser 
app.post('/api/movies',(req,res)=>{
    console.log('Movie recieved');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})