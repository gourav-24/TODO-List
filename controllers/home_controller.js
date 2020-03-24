

module.exports.home = function(req,res){
    try{
    console.log('/Home loaded');
    res.send('<h1>Home loaded </h1>');
    } catch(err){
        console.log('error in loading home controller');
    }

};