var express =require('express');
var app=express();
app.use(express.static(__dirname+'/public'));
app.get("/",function(req,res){
    res.sendFile("/index.html");
})
var port = Number(process.env.PORT || 3000);
app.listen(port,function(){
    console.log("Server running in the port+ "+port);
})