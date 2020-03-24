module.exports.professional = function(req,res){
    try{
        console.log('/professional loaded');
        res.send('<h1> Professional list loaded </h1>');
    }catch(err){
        console.log('error in loading professional tag page')
    }

}


module.exports.personal =function(req,res){
    try{
        console.log('/personal loaded');
        res.send('<h1> personal list loaded </h1>');

    }catch(err){
        console.log('error in loading personal tag page');

    }
}

module.exports.shopping = function(req,res){
    try{
        console.log('/shopping loaded');
        res.send('<h1> shopping list loaded </h1>');

    }catch(err){
        console.log('error in loading shopping tag page');

    
    }
}
