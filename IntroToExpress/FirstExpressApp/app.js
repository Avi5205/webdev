var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi There!");
});
app.get("/bye", function(req, res){
	res.send("Bye!");
});
app.get("/cat", function(req, res){
	console.log("/cat hit someone");
	res.send("Meow");
});

app.get("*", function(req, res){
	res.send("You are a star");
});


app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Server Started....");
});