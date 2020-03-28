const Task =require('../model/task');
const mongoose = require('mongoose');

module.exports.home = async function(req,res){
    try{
    console.log('/Home loaded');
    let all_task = await Task.find({});  // await is must here if not used find method may not be have time to fetch data 
    

    return res.render('Home',{
        title: "Home",
        tasks : all_task
    });
    } catch(err){
        console.log('error in loading home controller',err);
    }

};

module.exports.create = async function(req,res){
    try{
        console.log("this is request body");
        console.log(req.body);
        await Task.create({
            content : req.body.content,
            deadLine : req.body.deadLine,
            tag : req.body.tag

        });
        return res.redirect('/');


    }catch(err){
        console.log('error in creating task in home_controllers create method ',err);

    }

}

module.exports.destroy = async function(req,res){
    try{
        console.log(req.params.id);
        await Task.deleteOne({_id:req.params.id});
        return res.redirect('/');

    }catch(err){
        console.log('error in deleting task in destroy controller',err);
    }

}

module.exports.form =async function(req,res){
    try{
        let all_task = await Task.find({});  // await is must here if not used find method may not be have time to fetch data 
    

        return res.render('form',{
            title: "Form",
            tasks : all_task
        });
            
        

    }catch(err){
        console.log('error in form controller',err);
    }
}