const express = require('express');
const hbs = require('hbs');
var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));
app.get('/', (req, res)=>{
	//res.send('<h1>hello Express!</h2>');

	res.render("home.hbs",()=>{
		pageTitle: "Home"
		
	});
});

app.get('/about', (req, res)=>{
	res.render("about.hbs",()=>{
		pageTitle: "About Page"
		
	});
});

app.listen(3000,()=>{
	console.log("Server started up on port no 3000");
});
