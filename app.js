// Express JS
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
var path    = require("path");

app.get('/api/posts',function(req,res,next){

});

app.post('/api/posts',function(req,res,next){

})


app.use(express.static(__dirname+'/3DFunction')); // get assets folder
app.get('/',function(req,res){	
   res.sendFile(path.join(__dirname+'/3DFunction/Graphulus-Function.html')); // load sing-page application here
});


app.listen(3000,function(){
	console.log('Server listen on', 3000)
});