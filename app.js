const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); //allows api to request from a remote location
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');


//connecting to database
mongoose.connect(config.database);
mongoose.connection.on('connected',(req,res)=>{
    console.log('connected to database ' + config.database);
})
mongoose.connection.on('error', (err)=>{
    console.log('database got error' + err);
})

const app = express();
app.use(cors());

//static folder
app.use(express.static(path.join(__dirname, 'public')));


//bodyparser middleware 
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

const port = 3000;


app.get('/',(req,res)=>{
    res.send('we are here');
})

//requestmodels
const student = require('./routes/student');
const mentor = require('./routes/mentor');
const admin = require('./routes/admin');
app.use('/student',student);
app.use('/mentor',mentor);
app.use('/admin',admin);



app.listen(port, ()=> console.log('server running at port 3000'));