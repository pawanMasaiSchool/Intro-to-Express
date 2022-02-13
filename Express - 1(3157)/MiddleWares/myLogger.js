
const myLogger = (req,res,next)=>{
    console.log("myLogger");
    next();
}


module.exports = myLogger