const express =require('express');
const Port =8000;
const app = expres();

app.listen(Port,function(err){
    if(err){
        console.log(err,'error in starting the server');
    }else{
        console.log('server is up and running');
    }
})
