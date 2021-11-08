require('dotenv/config');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');
const customerRoutes = require('./routes/customer');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true,useUnifiedTopology: true }).then(() => {
    console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/customers',customerRoutes);


//For Preventing CORS Errors
app.use((req,res,next)=>{
    res.header("Acess-Conttrol-allow-Origin",'*');
    res.header("Acess-Conttrol-allow-Origin",'Origin ,X-Requested-With,Content-TypeError,Accept,Authorization');
    if(req.method === 'OPTIONS'){
        res.header ('Access-Control-Allow-Methods,PUT,POST,PATCH,DELETE');
        return res.status(200).json({});
    }
    next();
});


module.exports = app;      