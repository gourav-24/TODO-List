const Task =require('../model/task');
module.exports.professional = async function(req,res){
    try{
        let Professional_tasks = await Task.find({tag : "Professional"});
        console.log('/professional loaded');
        return res.render('other',{
            title:"Professional",
            tasks : Professional_tasks
        });
    }catch(err){
        console.log('error in loading professional tag page')
    }

}


module.exports.personal = async function(req,res){
    try{
        let Personal_tasks = await Task.find({tag : "Personal"});
        
        console.log('/personal loaded');
        return res.render('other',{
            title:"Personal",
            tasks: Personal_tasks
        });

    }catch(err){
        console.log('error in loading personal tag page',err);

    }
}

module.exports.shopping = async function(req,res){
    try{
        let Shopping_tasks = await Task.find({tag : "Shopping"});
        
        console.log('/shopping loaded');
        return res.render('other',{
            title:"Shopping",
            tasks:Shopping_tasks
        });
    }catch(err){
        console.log('error in loading shopping tag page',err);

    
    }
}
