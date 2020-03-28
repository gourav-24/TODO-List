const express =require('express');
const Port =8000;
const app = express();
const db = require('./configuration/mongoose');
app.use(express.urlencoded());
app.use('/',require('./routes/index'));

app.use(express.static('./assets'));

app.set('view engine','ejs');
app.set('views','./view');
app.listen(Port,function(err){
    if(err){
        console.log(err,'error in starting the server');
    }else{
        console.log('server is up and running');
    }
});


