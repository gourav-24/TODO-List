const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
   content:{
       type : String,
       required : true
   },
   deadLine :{
       type : Date,
       required : true,
   } ,
   tag : {
       type: String,
       required : true,
   }
},{timestamps : true});

const task = mongoose.model('task' , taskSchema);
module.exports = task;