const child_process = require("child_process");
const express = require("express");
const app = express();

app.use("/",function(req, res, next){
    child_process.exec('nature.bat', function(error, stdout, stderr) {
        console.log(stdout);
        res.send("Fuck you");
    });
})
app.listen(3000, function(){
    console.log("Hey, I am running.")
})