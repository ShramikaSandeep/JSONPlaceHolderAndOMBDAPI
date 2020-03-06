const express = require('express');
const app = express();
const request= require ('request');
app.set("view engine", "ejs");


app.get("/", function(req,res)
{   
  res.render("Home");
});
app.get("/results", function(req,res)
{
    const data = req.query.SearchQuery;
    const url = 'http://www.omdbapi.com/?apikey=thewdb&s=' + data;
   request(url, function(error,response,body)
   {
       if(!error && response.statusCode ==200)
       {
           
           const parsedData = JSON.parse(body);
           res.render("results", {Data :parsedData });
       }
   });
});

app.listen(3000, function()
{
 console.log("server is running");
});


