const mongoose = require('mongoose');
const { stringify } = require('querystring');
module.exports = mongoose.model('question',{
    name:String,
    username:String,
    email:String,
    pass:String,
    ques:{
        title:String,
        description:String,
    },
    ans:{
        Answer:String,
        like:Number
    }
});