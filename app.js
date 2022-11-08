let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser')
let movieRoute = require('../backend/routes/movie.route')

//connecting to mongodb
mongoose
        .connect('mongodb://localhost:27017/merncrudexample')
        .then((x) =>{
            console.log(`connected to Mongo!!!Database name : "${x.connections[0].name}"`)
        })
        .catch((err) =>{
            console.error('Error Connecting to Mongo',err.reason)
        })
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(cors());
app.use('/movies',movieRoute)

//port
const port = process.env.PORT || 4000;

const server = app.listen(port,() =>{
    console.log('Connected to port' + port)
})

//404 error
app.use((req,res,next) =>{
    next(createError(404));
});

app.use(function(err,req,res,next) {
    console.error(err.message);
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});