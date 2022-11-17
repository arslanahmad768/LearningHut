// require server
const express = require('express');
//live server
const server = express();
// convert html to text
const { htmlToText } = require('html-to-text');

const question = require('./modal/db');
server.set('view engine','ejs');
server.use(express.static('public'));
const mongoose = require('mongoose');
server.use(express.urlencoded({extended:true}));
mongoose.connect('mongodb://localhost:27017/learningdb', {useNewUrlParser: true, useUnifiedTopology: true},(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("database connected succfully");
        server.listen(3000,()=>{
            console.log("listning for request on port 3000");
        })
    }
})
 
server.get('/', function (req, res) {
    res.render('index',{title:"Home"})
});
server.get('/about',(req,res)=>{
    res.render('about',{title:"About us"})
});

// const topics =[
//     { title:"file handling error to store data",tag:"c++" ,description:"hi welcome toleearning Hut",name:"arslan ahmad"},
//     { title:"Create the server in ejs error",tag:"java",description:"solution of problem",name:"usman ahmad"},
//     { title:"Routing  the data from file in file handling error",tag:"java",description:"question anything",name:"macdonlad"}
// ];
server.get('/Question',(req,res)=>{
    question.find((err,data)=>{
        if(err)
        console.log(err);
        else
        data.forEach(des => {
            des.description=htmlToText(des.description, { wordwrap: 130 },{options: { '': { format: 'inline' }}});
            console.log(des.description);
        });
        // data.description=htmlToText(data.description);
        // console.log(data.description);
        res.render('Question',{title:"Q&A",topics:data});
    })
})
server.get('/askQuestion',(req,res)=>{
    
    res.render('AskQuestion',{title:"NewQuestion"});
})
server.post('/new',(req,res)=>{
    const q = new question({
        title: req.body.title,
        description: req.body.description
    });
    q.save();
    res.redirect('/');
});
server.post('/login',(req,res)=>{
    const q = new question({
        uname: req.body.username,
        description: req.body.password,

    });
    q.save();
    res.redirect('/');
});
server.post('/signup',(req,res)=>{
    const q = new question({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        pass: req.body.password
    });
    q.save();
    res.redirect('/');
});
server.use((req,res)=>{
    res.status(404).render('404',{title:"404"});     
})